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
- [Create a Discord.js bot](https://www.writebots.com/discord-bot-token/)
- [Add an app password to your email provider (e.g. Gmail)](https://support.google.com/accounts/answer/185833?hl=en)

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

For this part, you'll only need to change the values in `required-config.js`.

| Variable | Default | Allowed Values
| - | - | - |
| `dbPath` | `./` - Folder bot runs from | Any valid OS path where you want the data to be stored
| `prefix` | `!` | The set of characters every bot command starts with. E.g. `!help` |
| `serverID`| N/A | Any valid Discord server ID |  

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
- Add translations for other languages (e.g. Spanish, Chinese, Arabic)
