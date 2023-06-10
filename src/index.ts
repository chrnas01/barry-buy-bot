import * as dotenv from "dotenv";
import {
    Telegraf
} from "telegraf";
dotenv.config()

const bot = new Telegraf(process.env.TELEGRAM_TOKEN as string);

bot.start((msg) => {
    console.log(msg)
    msg.reply("Welcome")
})

bot.launch();