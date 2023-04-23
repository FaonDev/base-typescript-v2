import { readdirSync } from 'fs'
import { discordApp } from '.'

export async function RegisterAssets(applicationCommands: any[]) {
    for (const event of readdirSync(`${__dirname}/events`)) import(`./events/${event}`)
    for (const command of readdirSync(`${__dirname}/commands`)) applicationCommands.push((await import(`./commands/${command}`)).default)
    discordApp.on('ready', _ => discordApp.application?.commands.set(applicationCommands) as void).on('interactionCreate', interaction => interaction.isChatInputCommand() && (applicationCommands.find(command => command.name === interaction.commandName)).execute(interaction))
}