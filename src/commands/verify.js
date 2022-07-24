import config from '../../config.js'
import emailValidator from 'email-validator'
import db from '../services/db.js'
import sgMail, { createEmailMsg, generateAuthCode } from '../services/sendGrid'
import {
  ERROR_MSGS,
  SUCCESS_MSGS,
  AUTH_CODE_NUM_DIGITS,
  NUM_EXPECTED_ARGS,
  SUCCESS_STATUS_CODE,
} from '../utils/constants.js'
import { getFullUsername } from '../utils/lib.js'

const { allowedEmailDomains, discord } = config
const { verifiedRoleID } = discord

export async function sendVerificationEmail(msg, args) {
  // <=== 1 - INPUT VALIDATION ===>
  const sendMsg = (msg) => msg.channel.send(msg)
  const fullUsername = getFullUsername(msg)

  // 1. Check if user provided any args
  if (args.length < NUM_EXPECTED_ARGS) return sendMsg(ERROR_MSGS.insufficientArgs)
  
  // 2. Check if the email is formatted correctly
  const email = args[0]
  if (!emailValidator.validate(email)) return sendMsg(ERROR_MSGS.invalidEmailFormat)

  // 3. Check if the email matches allowed domains
  if (!allowedEmailDomains.some((domain) => email.endsWith(domain))) return sendMsg(ERROR_MSGS.unallowedDomain(allowedEmailDomains))

  // 4. Check if the email has already been used before
  if (db.hasEmail(fullUsername)) return sendMsg(ERROR_MSGS.emailAlreadyRegistered(email))

  // <=== 2 - EMAIL VERIFICATION ===>
  // 1. Send a verification email
  sendMsg(SUCCESS_MSGS.sentVerificationEmail(email))
  const authCode = generateAuthCode(AUTH_CODE_NUM_DIGITS)
  const emailMsg = createEmailMsg(email, authCode)
  
  // 2. Check if the email was successfully sent
  const response = await sgMail.send(emailMsg).catch(console.error)
  if (!response || response[0].statusCode !== SUCCESS_STATUS_CODE) return sendMsg(ERROR_MSGS.couldNotSendEmail)

  // 3. Add the user's account to the database for now  
  db.addUserAccount(fullUsername, email, authCode)
}

export async function verifyAuthCode(msg, args) {
  const sendMsg = (msg) => msg.channel.send(msg)
  const fullUsername = getFullUsername(msg.author)

  // Validate the auth code
  const [authCodeAsStr] = args
  const authCode = parseInt(authCodeAsStr)
  if (!Number.isInteger(authCode)) return sendMsg(ERROR_MSGS.authCodeNonNumeric)
  if (authCodeAsStr.length !== AUTH_CODE_NUM_DIGITS) return sendMsg(ERROR_MSGS.authCodeLengthMismatch)

  // Compare it to what we have stored in our database
  const storedCode = db.getAuthCode(fullUsername)

  // Provided code doesn't match stored code
  if (storedCode !== authCode) return sendMsg(ERROR_MSGS.authCodeCodeMismatch)

  // Fetch the member from Discord
  const member = await msg.channel.guild.members.fetch(msg.author.id).catch(console.error)
  if (!member) return sendMsg(ERROR_MSGS.couldNotFindUser(fullUsername))
  
  // Fetch the desired role from Discord
  const role = msg.channel.guild.roles.cache.find(({id}) => id === verifiedRoleID).catch(console.error)
  if (!role) return sendMsg(ERROR_MSGS.couldNotFindRole)
  
  // Add the role to the and active their account
  await member.roles.add(role)
  db.setAccountActiveness(fullUsername, true)
  return sendMsg(ERROR_MSGS.successfulVerification(fullUsername))
}