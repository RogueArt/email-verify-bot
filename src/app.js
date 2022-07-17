// Allow access to .env file
import dotenv from "dotenv"
dotenv.config()

// Get keys from .env
const { BOT_TOKEN, CMD_PREFIX } = process.env

// Discord
import { Client, Intents } from "discord.js"
import db from './services/db.js'

// Initialize Discord client
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

// Bring in commands, helper functions
import { extractCmdAndArgs, getFullUsername, logCmd } from "./utils/lib.js"
import { sendVerificationEmail, verifyAuthCode, help } from './commands/index.js'

// Execute on start up
client.on("ready", () => {
  console.log("UCLA Email Verification", "bot started!")
})

// Execute on message creation
client.on("messageCreate", async (msg) => {
  // Don't reply to message sent by bot
  if (msg.author.bot) return

  // Store logs of commands by users
  logCmd(msg)

  // Get command name and arguments from the message
  const [cmd, args] = extractCmdAndArgs(msg)

  // Call right function for command
  switch (cmd) {
    // Verify command
    case "verify":
      // Verify email if user doesn't exist in database
      if (db.hasEmail(getFullUsername(msg.author))) await sendVerificationEmail(msg, args)

      // Otherwise verify if exists, but inactive
      else await verifyAuthCode(msg, args)

      // Don't verify if they exist and are active
      break

    // Help command
    case "help":
      await help(msg, args)
      break

    // Default handler if command not understood
    default:
      msg.channel.send(
        `Invalid command. Type \`${CMD_PREFIX}help\` to see the list of commands.`
      )
      break
  }
})

// Log the bot into Discord
client.login(BOT_TOKEN)
