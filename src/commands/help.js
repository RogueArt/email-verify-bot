// Get bot prefix from .env
import config from '../../config.js'
import { MessageEmbed } from 'discord.js'
import { HELP_CMD_DESCRIPTION_LIST } from '../utils/constants.js'
import { genFieldsFromCmdDescriptionList } from '../utils/lib.js'

const HELP_COLOR = 0xff0000
const HELP_TITLE = 'Available Commands'
const HELP_EMBED = new MessageEmbed()
  .setColor(HELP_COLOR)
  .setTitle(HELP_TITLE)
  .addFields(genFieldsFromCmdDescriptionList(HELP_CMD_DESCRIPTION_LIST))

export async function help(msg) {
  // Send an embed showing list of commands
  msg.channel.send({ embeds: [HELP_EMBED] })
}