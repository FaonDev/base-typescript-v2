import { ChatInputCommandInteraction } from 'discord.js'

export default {
    name: 'example', description: '...',

    async execute(interaction: ChatInputCommandInteraction) {
        interaction.reply('...')
    }
}