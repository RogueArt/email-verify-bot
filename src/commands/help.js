import { MessageEmbed } from 'discord.js'
import { genFieldsFromCmdDescriptionList } from '../utils/lib.js'
import config from '../../config.js'
const { helpEmbedOptions } = config

// Generate a reusable help embed
const HELP_EMBED = new MessageEmbed()
  .setColor(helpEmbedOptions.color)
  .setTitle(helpEmbedOptions.title)
  .addFields(genFieldsFromCmdDescriptionList(helpEmbedOptions.commandDescriptions))

export async function help(msg) {
  // Send an embed showing list of commands
  msg.channel.send({ embeds: [HELP_EMBED] })
}