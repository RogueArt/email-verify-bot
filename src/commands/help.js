// Get bot prefix from .env
const { CMD_PREFIX } = process.env 

const helpMessage = `Here are the available commands for your bot:
\`hello [NAME]\` - 1 optional argument NAME, says "Hello world" or "Hello [name here]"
`

export async function help(msg, args) {
  // Send a message showing list of commands
  if (args.length === 0) return msg.channel.send(helpMessage)

  // If a command is specified, show more info about it
  const cmd = args[0]
  switch (cmd) {
    case 'hello':
      msg.channel.send(`\`hello [NAME]\` - 1 optional argument NAME, says "Hello world" or "Hello [name here]"`)
      return

    default:
      msg.channel.send(
        `Unknown command, type ${CMD_PREFIX}help to see the list of available commands.`
      )
      return
  }
}
