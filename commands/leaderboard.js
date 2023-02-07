import { SlashCommandBuilder } from 'discord.js';

export default {
	data: new SlashCommandBuilder()
		.setName('leaderboard')
		.setDescription('Shows a leader board'),
	async execute(interaction) {
		await interaction.reply('TODO');
	},
};