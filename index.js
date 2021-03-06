// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// const SlackBot = require("slackbots");
const { App } = require("@slack/bolt");
require("dotenv").config();

const bot = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

(async () => {
  // Start the app
  await bot.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();

bot.event("app_mention", async ({ context, event }) => {
  try {
    await bot.client.chat.postMessage({
      token: context.botToken,
      channel: event.channel,
      text: "Welcome. How are you doing?",
    });
  } catch (e) {
    console.log(`error responding ${e}`);
  }
});
// });

// const app = express();
// mongoose.Promise = global.Promise;

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("mongodb server started.");

//     const PORT = process.env.PORT || 5500;
//     app.listen(PORT, () => {
//       console.log(`Server started on ${PORT}`);
//     });
//   })
//   .catch(() => {
//     console.log("Mongodb connection failed.");
//   });

// app.use(cors());

// import routes from "./routes";
// app.use("/", routes);
