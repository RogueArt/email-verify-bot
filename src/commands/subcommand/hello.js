export async function hello(msg, args) {
  if (args.length === 0) return msg.channel.send('Hello world!')
  return msg.channel.send(`Hello ${args[0]}!`)
}
