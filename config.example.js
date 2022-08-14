/**
 * @property { string } dbPath - Location where the data is stored. By default, this is the same folder as the bot is installed in.
 * @property { string } prefix - The set of characters that each command starts with. E.g. `!help`
 * @property { string } discord.serverID - The unique 18-digit numerical ID of your Discord server (guild)
 * @property { string } discord.verifiedRoleID - The unique 18-digit numerical ID of the role you want verified users to have
 * @property { string } discord.adminID - The unique 18-digit numerical ID of the role that have permission to override the bot
 * @property { string[] } allowedEmailDomains - A list of domains (suffixes) a valid email ends with. This way only peopple from your organization can register
 * @property { number } daysUntilEmailExpires  - Number of days for which the verification code is valid
 * @property { string } emailConfig.from - The "from" section of the email. E.g. what you see when you receive an email from someone else
 * @property { string } emailConfig.subject - The "subject" / header of the email.
 * @property { string } emailConfig.emailTemplatePath - Location of the email template (HTML/EJS file) that it reads from. Change it to another path if you want a different HTML file.
 * @property { number } helpEmbedOptions.color - The accent shown on the left side of the help embed sent when running the help command (e.g. !help)
 * @property { string } helpEmbedOptions.title - The title displayed when running the help command (e.g. !help)
 * @property { object[] } helpEmbedOptions.commandDescriptions - List of commands to be shown when running !help
 * @property { string } helpEmbedOptions.commandDescriptions.cmdName - Name of the command to be shown when running the help command (e.g. !help)
 * @property { string[] } helpEmbedOptions.commandDescriptions.cmdArgs - Allowed arguments for the command  
 * @property { string } helpEmbedOptions.commandDescriptions.description - Description of the command
 */
export default {
  // <========= DATA STORAGE ========>
  dbPath: './',

  // <======== DISCORD ========>
  prefix: '!',
  discord: {
    serverID: 'REPLACE-WITH-YOUR-DISCORD-SERVER-ID',
    verifiedRoleID: 'REPLACE-WITH-YOUR-VERIFIED-ROLE-ID',
    adminID: 'REPLACE-WITH_YOUR-ADMIN-ID',
  },

  // <======== EMAILS ========>
  allowedEmailDomains: ['your-school.edu', 'g.your-school.edu', 'github.com'],
  daysUntilEmailExpires: 7,
  emailConfig: {
    from: '"Your Discord Server Name Here" <your-discord-email@gmail.com>',
    subject: 'Verify Your Email to Join the Discord Server',
    emailTemplatePath: '../../static/email-template.ejs',
  },

  // <======== COMMANDS LIST ========>
  helpEmbedOptions: {
    color: 0xFF0000,
    title: 'Available Commands',
    commandDescriptions: [
      {
        cmdName: 'verify email',
        cmdArgs: ['Email/Auth Code'],
        description:
          'Enter email or auth code as instructed to verify your account',
      },
    ],
  },
}