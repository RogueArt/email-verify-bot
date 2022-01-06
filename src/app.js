// Allow access to .env file
import dotenv from 'dotenv'
dotenv.config()

// Get keys from .env
const { BOT_TOKEN, CMD_PREFIX } = process.env

// Discord
import { Client, Intents } from 'discord.js'

// Initialize Discord client
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

// Bring in commands, helper functions
import { extractCmdAndArgs, isValidMsg, logCmd } from './utils/lib.js'
import { hello, help } from './commands/index.js'

// Execute on start up
client.on('ready', () => {
  console.log('Your bot name here', 'bot started!')
})

// Execute on message creation
client.on('messageCreate', async msg => {
  // Don't reply to message sent by bot
  if (msg.author.bot) return

  // Validate message if needed
  if (!isValidMsg(msg)) return // msg.channel.send('Invalid message')

  // Store logs of commands by users
  logCmd(msg)

  // Get command name and arguments from the message
  const [cmd, args] = extractCmdAndArgs(msg)

  // Call right function for command
  switch (cmd) {
    // Hello world command
    case 'hello':
      await hello(msg, args)
      break

    case 'help':
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
