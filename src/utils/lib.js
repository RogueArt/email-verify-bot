// Allow access to .env file
import dotenv from 'dotenv'
dotenv.config()

// Get keys from .env
const { CMD_PREFIX } = process.env

// Get config data
import * as CONFIG from '../../config.js'

/**
 * Validates a message's contents
 * @param {Message} msg
 * @returns {boolean}
 */
export function isValidMsg(msg) {
  // Check if message starts with prefix
  if (!msg.content.startsWith(CMD_PREFIX)) return false

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
  const msgContentsList = msg.content.slice(CMD_PREFIX.length).split(/ +/)
  const [cmd, args] = [msgContentsList[0], msgContentsList.slice(1)]
  return [cmd, args]
}

/**
 * Logs time, user, and content to console
 * @param {Message} msg 
 */
export function logCmd(msg) {
  const currentTime = (new Date()).toLocaleString()
  const { username, discriminator } = msg.author
  const nameWithTag = username + discriminator

  console.log(`${currentTime} - ${nameWithTag}: ${msg.content}`);
}