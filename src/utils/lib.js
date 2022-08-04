// Allow access to .env file
import dotenv from 'dotenv'
dotenv.config()

// Get config data
import config from '../../config.js'
import { WHITESPACE_REGEX } from './constants.js'
const { prefix } = config

// <==== COMMAND HANDLING ====>
/**
 * Validates a message's contents
 * @param {Message} msg
 * @returns {boolean}
 */
export function isValidMsg(msg) {
  // Check if message starts with prefix
  if (!msg.content.startsWith(prefix)) return false

  /* Perform more validation here
   *
  */

  return true
}

/**
 * Extracts command and arguments from a message
 * @param {Message} msg
 * @returns {[String, String[]]}
 */
export function extractCmdAndArgs(msg) {
  // Convert message into a list of strings with prefix removed
  const msgContentsList = msg.content.slice(prefix.length).split(/ +/)
  const [cmd, args] = [msgContentsList[0], msgContentsList.slice(1)]
  return [cmd, args]
}

/**
 * Logs time, user, and content to console
 * @param {Message} msg 
 */
export function logCmd(msg) {
  const currentTime = (new Date()).toISOString()
  const { username, discriminator } = msg.author
  const nameWithTag = username + '#' + discriminator

  console.log(`[${currentTime}] ${nameWithTag}: ${msg.content}`);
}

// <==== USER VERIFICATION ====>
/**
 * Return a username in format
 * Username#1234
 * @param {*} user
 * @returns {string} 
 */
export function getFullUsername(user) {
  if (user?.constructor?.name !== 'User') throw new Error('Did not pass in a User object for getting full username.')
  const { username, discriminator } = user

  return username + '#' + discriminator
}

// REFACTOR: Change name to getDateSevvvvvv                    
/**
 * Generates a Date that is seven days from now
 * Used to expire codes that were sent more than 7 days ago.
 * @returns {Date}
 */
export function getSevenDaysFromNow() {
  const sevenDaysFromNow = new Date()
  sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7)
  return sevenDaysFromNow
}

// TO-DO!
export function pingAnAdmin() {
  console.log('TO-DO: Ping the admin!')
}

// <==== HELP COMMAND ====>
/**
 * Takes in any string converts it to Title Case
 * @param {String} str (in any case)
 * @returns {String} (In Title Case)
 */
export function toTitleCase(str) {
  if (str.length === 0) return str

  return str
    .split(WHITESPACE_REGEX)
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ')
}

// TO-DO: Format this differently based on optional
// and required arguments
/**
 * Format's the command's arguments.
 * @param {String[]} cmdArgs 
 * @returns {String}
 */
export function formatCmdArgsForEmbed(cmdArgs) {
  return cmdArgs.map(cmdArg => {
    return '[' + cmdArg + ']'
  }).join(' ')
}

export function genFieldsFromCmdDescriptionList(cmdDescriptionList) {
  return cmdDescriptionList.map(({ cmdName, cmdArgs, description }, index) => {
    return {
      name: `${index + 1}. ${toTitleCase(cmdName)}`,
      value: `\`${prefix}${cmdName} ${formatCmdArgsForEmbed(cmdArgs)}\` - ${description}`,
    }
  })
}
