import { RegisterAssets } from './handler'
import { Client } from 'discord.js'
import { config } from 'dotenv'

export const discordApp = new Client({
    intents: []
})

config()
discordApp.login(process.env.TOKEN)
RegisterAssets([])