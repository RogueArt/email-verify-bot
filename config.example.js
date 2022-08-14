/**
 * All configuration properties - this top part is to help out developers :)
 * @property { string } dbPath - (Optional) Location where the data is stored. By default, this is the same folder as the bot is installed in.
 * @property { string } prefix - (Optional) The set of characters that each command starts with. E.g. `!help`
 * @property { string } discord.serverID - (Required) The unique 18-digit numerical ID of your Discord server (guild)
 * @property { string } discord.verifiedRoleID - (Required) The unique 18-digit numerical ID of the role you want verified users to have
 * @property { string } discord.adminID - (Required) The unique 18-digit numerical ID of the role that have permission to override the bot
 * @property { string[] } allowedEmailDomains - (Required) A list of domains (suffixes) a valid email ends with. This way only peopple from your organization can register
 * @property { number } daysUntilEmailExpires - (Optional) Number of days for which the verification code is valid
 * @property { string } emailConfig.from - (Required) The "from" section of the email. E.g. what you see when you receive an email from someone else
 * @property { string } emailConfig.subject - (Required) The "subject" / header of the email.
 * @property { string } emailConfig.emailTemplatePath - (Optional) Location of the email template (HTML/EJS file) that it reads from. Change it to another path if you want a different HTML file.
 * @property { number } helpEmbedOptions.color - (Optional) The accent shown on the left side of the help embed sent when running the help command (e.g. !help)
 * @property { string } helpEmbedOptions.title - (Optional) The title displayed when running the help command (e.g. !help)
 * @property { object[] } helpEmbedOptions.commandDescriptions - (Optional) List of commands to be shown when running !help
 * @property { string } helpEmbedOptions.commandDescriptions.cmdName - (Optional) Name of the command to be shown when running the help command (e.g. !help)
 * @property { string[] } helpEmbedOptions.commandDescriptions.cmdArgs - (Optional)  Allowed arguments for the command
 * @property { string } helpEmbedOptions.commandDescriptions.description - (Optional)  Description of the command
 */
export default {
  // <========= DATA STORAGE ========>
  // (Optional) Location where the data is stored. By default, this is the same folder as the bot is installed in.
  dbPath: './',

  // <======== DISCORD ========>
  // (Optional) The set of characters that each command starts with. E.g. `!help`
  prefix: '!',
  discord: {
    // (Required) The unique 18-digit numerical ID of your Discord server (guild)
    serverID: 'REPLACE-WITH-YOUR-DISCORD-SERVER-ID',
    // (Required) The unique 18-digit numerical ID of the role you want verified users to have
    verifiedRoleID: 'REPLACE-WITH-YOUR-VERIFIED-ROLE-ID',
    // (Required) The unique 18-digit numerical ID of the role that have permission to override the bot
    adminID: 'REPLACE-WITH_YOUR-ADMIN-ID',
  },

  // <======== EMAILS ========>
  // (Required) A list of domains (suffixes) a valid email ends with. This way only peopple from your organization can register
  allowedEmailDomains: ['REPLACE-HERE.edu', 'g.REPLACE-HERE.edu'],
  // (Optional) Number of days for which the verification code is valid
  daysUntilEmailExpires: 7,

  emailConfig: {
    // (Required) The "from" section of the email. E.g. what you see when you receive an email from someone else
    from: '"Your Discord Server Name Here" <your-discord-email@gmail.com>',
    // (Required) The "subject" / header of the email.
    subject: 'Verify Your Email to Join the Discord Server',
    // (Optional) Location of the email template (HTML/EJS file) that it reads from. Change it to another path if you want a different HTML file.
    emailTemplatePath: '../../static/email-template.ejs',
  },

  // <======== COMMANDS LIST ========>
  helpEmbedOptions: {
    // (Optional) The accent shown on the left side of the help embed sent when running the help command (e.g. !help)
    color: 0xff0000,
    //  (Optional) The title displayed when running the help command (e.g. !help)
    title: 'Available Commands',
    // (Optional) List of commands to be shown when running !help
    commandDescriptions: [
      {
        // (Optional) Name of the command to be shown when running the help command (e.g. !help)
        cmdName: 'verify email',
        // (Optional)  Allowed arguments for the command
        cmdArgs: ['Email/Auth Code'],
        // (Optional)  Description of the command
        description:
          'Enter email or auth code as instructed to verify your account',
      },
    ],
  },
}
