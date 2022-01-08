# About

A Discord bot written in JS to verify UCLA students by email.

Feel free to fork or clone this to use at your own university or organization!

Currently this does not support slash commands, but will be updated with support later on.

# Getting Started

## Prerequisites

Install the latest version of [Node](https://nodejs.org/en/download/) from here.
This bot requires Node v16 or above to function.

Create a Discord bot [here](https://discord.com/developers) and have the bot token ready.
You can find the bot token under the "Bot" page for your selected bot. Click "Copy" to copy the bot token to clipboard.

In order for the bot to send verification codes, set up a [Sendgrid API key and template](https://www.twilio.com/docs/verify/email).

See here for example:
![Bot token page for a Discord bot](https://user-images.githubusercontent.com/57082175/148336114-1a88ba9f-ee9e-414c-a2b6-25532817ceb7.png)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/RogueArt/ucla-cs-verify-bot.git
```

2. Install node modules:

```bash
cd ucla-cs-verify-bot
npm install
```

3. Configure the bot:
   1. Make a copy of `.env.example` and call it `.env`
   2. Replace the value for `BOT_TOKEN` with your Discord bot's token
   3. Replace the value for `CMD_PREFIX` to any prefix you want your commands to start with
   4. Add in your `SENDGRID_API` and `SENDGRID_TEMPLATE_ID` to be able to send emails from the bot.

## Running

To run the bot, simply do `npm run start`.

To run it in development mode, use `npm run dev` to live reload the bot as the source code changes.

# Contributing

Feel free to fork this repo and change the code however you like! Make a pull request and I'll review it as soon as I can!
