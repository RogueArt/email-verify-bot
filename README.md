# About

A Discord.js bot used to verify users by email.

(TO-DO: Add a demonstration)

Feel free to fork or clone this to use at your own university or organization!

# Usage

Running the bot:
- **Starting:** `npm start`  - Start the bot normally
- **Development:** `npm run dev` - Starts and live reloads the bot as source coed changes
- **Tests:** `npm test` - Runs all automated tests against bot

# Getting Started

## Prerequisites

**Required:**
- [Install Node.js (JavaScript) v16 or above](https://nodejs.org/en/download/)
- [Add an app password to your email provider (e.g. Gmail)](https://support.google.com/accounts/answer/185833?hl=en)
- [Create a Discord.js bot](https://www.writebots.com/discord-bot-token/)
- [Add your Discord bot to your server](https://www.youtube.com/watch?v=AzoWBL1I3L0)

**Optional:**
- [Create a new email account (e.g. Gmail)](https://support.google.com/accounts/answer/27441?hl=en)
- [Setup PM2 so it restarts itself](https://pm2.keymetrics.io/docs/usage/quick-start/)

## Installation

**1. (Required) Open a new terminal, clone this repository and install required dependencies:**

```bash
git clone https://github.com/RogueArt/ucla-cs-verify-bot.git
cd ucla-cs-verify-bot
npm install
```

**2. (Required) Setting enviornment variables (protected data):**

1. Make a copy of `.env.example` and rename it to `.env`
2. Replace all of the values below with your own

Environment Variables:
| Variable | Allowed Values | Explanation |
| - | - | - |
| `BOT_TOKEN` | Discord bot's token | See [tutorial here](https://www.writebots.com/discord-bot-token/) on how to find this |
| `SENDER_SERVICE` | `Gmail`, `Outlook`, `Yahoo`, etc. | See Nodemailer's [list of well-known email addresses](https://nodemailer.com/smtp/well-known/) |
| `SENDER_EMAIL`| Email account you're sending the email from | Must be a valid formatted email address, e.g. rogueartdev@outlook.com |
| `SENDER_PASS` | Password of the email account you're sending from | Can be account password, but see above on setting app password |

**3. (Required) Set required configuration:**

1. Make a copy of `config.example.js` and rename it to `config.js`
2. Edit the file and replace the following required values with your own. The rest can be left as-is:

Required Configuration:
| Variable | Allowed Values
| - | - |
| `serverID` | [See how to find Discord IDs](https://www.youtube.com/watch?v=KVLdpboY7bg) |
| `verifiedRoleID` | [See how to find Discord IDs](https://www.youtube.com/watch?v=KVLdpboY7bg) |
| `adminID` | [See how to find Discord IDs](https://www.youtube.com/watch?v=KVLdpboY7bg) |
| `allowedEmailDomains` | Any email domain name, e.g. `gmail.com`, `outlook.com`, `g.ucla.edu` |
| `from` | Must be in format `"Any Text Here" <your-discord-email-here@mail-domain.com>"` |
| `subject` | Can be any text, recommended to put your discord name here

# To-Do's / Contributing

**Where can I report an issue?:**
Feel free to [raise any issues](https://github.com/RogueArt/email-verify-bot) regarding anything or beyond this list:
- Bugs or program errors
- Code quality improvements
- Documentation (translations are welcome!)
- Missing or improper testing
- Internationalization (i18n) support for the bot
- Anything else!

**How can I contribute? (TO-DO items):**
- Expire emails after a certain period of time for security reasons
- Add more crypto functions for users to choose from to improve security
- Add a cooldown to prevent bruteforcing or DoSing the bot
- Add translations for other languages (e.g. Spanish, Chinese, Arabic)
