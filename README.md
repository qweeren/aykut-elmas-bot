# Aykut Elmas Vine Bot

A simple Discord bot built with `discord.js` v14 that sends random Vine skits from Aykut Elmas, a famous content creator known for his funny skits in Turkey.

## Features

- **/aykut**: Sends a random video from a folder containing Vine skits of Aykut Elmas.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v16.6.0 or higher
- A Discord bot token. You can get one by creating a new application on the [Discord Developer Portal](https://discord.com/developers/applications).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/aykut-elmas-vine-bot.git
cd aykut-elmas-vine-bot
```

2. Install the dependencies:

```bash
npm install
```

3. Create a config.json file in the src directory with the following structure:

```json
{
  "token": "YOUR_BOT_TOKEN_HERE",
  "clientId": "YOUR_CLIENT_ID",
  "guildId": "YOUR_GUILD_ID" // Optional, only if registering to a specific guild
}
```

### Folder Structure

```bash
/src
  /commands
    aykut.js
  config.json
  deploy-commands.js
  index.js
/videos
  (Place your Vine skits here)
```

### Deploying Commands

Before running the bot, you need to deploy the commands:

```bash

node src/deploy-commands.js
```

### Running the Bot

Start the bot using Node.js:

```bash
node src/index.js
```

### Contribution

If you want to contribute to this project, please fork the repository and submit a pull request.
License

This project is licensed under the MIT License. See the LICENSE file for more details.
Acknowledgements

[^1]:Thanks to Aykut Elmas for the hilarious content
