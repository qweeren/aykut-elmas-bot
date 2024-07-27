const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aykut')
        .setDescription('Sends a random video from the folder.'),
    async execute(interaction) {
        const videosFolder = path.join(__dirname, '../../videos'); // Updated path
        const videoFiles = fs.readdirSync(videosFolder).filter(file => file.endsWith('.mp4')); // Adjust the file extension if needed

        if (videoFiles.length === 0) {
            await interaction.reply('No videos found in the folder.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * videoFiles.length);
        const randomVideo = videoFiles[randomIndex];
        const videoPath = path.join(videosFolder, randomVideo);

        await interaction.reply({ files: [videoPath] });
    },
};
