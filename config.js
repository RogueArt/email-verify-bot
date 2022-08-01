export default {
  // <========= DATA STORAGE ========>
  dbPath: './',

  // <======== DISCORD ========>
  prefix: '!',
  discord: {
    serverID: '',
    verifiedRoleID: '',
    adminID: '',
  },

  // <======== EMAILS ========>
  allowedEmailDomains: ['your-school.edu', 'g.your-school.edu'],
  daysUntilEmailExpires: 7,

  // <======== COMMANDS LIST ========>
  helpEmbedOptions: {
    color: 0xff0000,
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
