import { MessageEmbed } from 'discord.js'
import { toTitleCase } from './lib.js'
import config from '../../config.js'
const { helpEmbedOptions, allowedEmailDomains, prefix } = config

export const WHITESPACE_REGEX = /\s+/
export const NUM_EXPECTED_ARGS = 1
export const AUTH_CODE_NUM_DIGITS = 6
export const SUCCESS_STATUS_CODE = 200

// TO-DO: Refactor this code and 
// move embeds to its own file
const EMBED_TITLES = {
  INVALID_INPUT: 'Invalid Input',
  INVALID_AUTH_CODE: 'Invalid Auth Code',
  SYSTEM_ERROR: 'System Error',
  SENT_VERIFICATION: 'Sent Verification Email',
  SUCCESSFUL_VERIFICATION: 'Successful Verification'
}

const EMBED_COLORS = {
  ERROR: 0xFF0000,
  WARNING: 0xFFAA00,
  SUCCESS: 0x00FF00,
}

export const ERROR_MSGS = {
  // Validate email
  insufficientArgs: createErrorEmbed(EMBED_TITLES.INVALID_INPUT, 'Please provide a valid email address in order to be verified!'),
  invalidEmailFormat: createErrorEmbed(EMBED_TITLES.INVALID_INPUT, `Please provide a correctly formatted email address that ends with any of the following domains: \`${allowedEmailDomains.join(', ')}\``),
  unallowedDomain: (allowedDomains) => createErrorEmbed(EMBED_TITLES.INVALID_INPUT, `Please provide an email address that ends with any of the following domains: \`${allowedEmailDomains.join(', ')}\``),
  emailAlreadyRegistered: (email) => createErrorEmbed(EMBED_TITLES.INVALID_INPUT, `Unable to verify you. Email "${email}" has already been registered with an account.`),
  couldNotSendEmail: (email) => createErrorEmbed(EMBED_TITLES.INVALID_INPUT, `Unable to send email to ${email}.\nPlease contact the admins for additional support.`),

  // Validate auth code
  authCodeNonNumeric: createErrorEmbed(EMBED_TITLES.INVALID_AUTH_CODE, `You've already been sent a verification email.\nPlease provide only digits from 0-9 when entering your auth code.`),
  authCodeLengthMismatch: createErrorEmbed(EMBED_TITLES.INVALID_AUTH_CODE, `Your code does not have the current number of digits.\nPlease provide a valid ${AUTH_CODE_NUM_DIGITS}-digit auth code!`),
  authCodeCodeMismatch: createErrorEmbed(EMBED_TITLES.INVALID_AUTH_CODE, `You provided an invalid auth code. Please try again using \`${prefix}verify <code>\`!`),
  
  // Bot error
  couldNotFindUser: (username) => createErrorEmbed(EMBED_TITLES.SYSTEM_ERROR, `Could not find user ${username} from Discord. Contact the admins for help.`),
  couldNotFindRole: createErrorEmbed(EMBED_TITLES.SYSTEM_ERROR, 'Could not find the verified role ID from Discord. Contact the admins for help'),
  couldNotAddRole: createErrorEmbed(EMBED_TITLES.SYSTEM_ERROR, 'Could not add verified role to your account. The admins have been contacted.'),
}
export const SUCCESS_MSGS = {
  sentVerificationEmail: (email) => createSuccessEmbed(EMBED_TITLES.SENT_VERIFICATION, `Sent a verification email to ${email}! Verify using \`!verify <code>\`. Please check if your spam folder if you don't receive it.`),
  successfulVerification: (username) => createSuccessEmbed(EMBED_TITLES.SUCCESSFUL_VERIFICATION, `Thanks ${username}! You've now been verified and can access the server!`),
}

function createErrorEmbed(title, description) {
  return createEmbed(EMBED_COLORS.ERROR, title, description)
}

function createSuccessEmbed(title, description) {
  return createEmbed(EMBED_COLORS.SUCCESS, title, description)
}

function createEmbed(color, title, description) {
  return new MessageEmbed()
    .setColor(color)
    .setTitle(toTitleCase(title))
    .setDescription(description)
}