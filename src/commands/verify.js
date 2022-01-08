import config from '../../config.js'
import emailValidator from 'email-validator'
import db from '../db/db.js'

const { allowedEmailDomains, discord } = config
const { verifiedRoleID } = discord

export async function verify(msg, args) {
  // Check if the user provided any args
  if (args.length < 1) {
    return msg.channel.send('Please provide a valid email address in order to be verified!')
  }
  const email = args[0]

  // Check if the email is formatted correctly
  if (!emailValidator.validate(email)) {
    return msg.channel.send('Please provide a correctly formatted email address in order to be verified!')
  }

  // Check if the email matches the domain
  if (!allowedEmailDomains.some((domain) => email.endsWith(domain))) {
    const domainsStr = allowedEmailDomains.join(', ')
    return msg.channel.send(
      `Please provide an email address that ends with any of the following domains: \`${domainsStr}\``
    )
  }

  // Check if the email has already been used before
  if (db.has(email)) {
    return msg.channel.send(`Unable to verify you. Email "${email}" has already been registered with an account.`)
  }

  // Send a verification email
  msg.channel.send(`Sent a verification email to ${email}. Click the link to verify your account!`)

  // Add the verified role to the user
  const user = msg.author
  try {
    msg.member.roles.add(verifiedRoleID)
  } catch (e) {
    console.error(e)
    // Possibly ping an admin here?
    return msg.channel.send('Error, could not verify you into the server. The admins have been contacted.') 
  }

  // Add the user's account to the database  
  const { username, discriminator } = user
  const fullUsername = username + '#' + discriminator
  db.set(email, fullUsername)

  msg.channel.send('Successfully verified you into the server!')
}
