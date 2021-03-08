require("dotenv").config();

const { RTMClient } = require("@slack/rtm-api");
const { WebClient } = require("@slack/web-api");
const { createEventAdapter } = require('@slack/events-api');

const rtm = new RTMClient(process.env.SLACK_OAUTH_TOKEN);
const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);

// rtm.start().catch(console.error);

// rtm.on("ready", async (user) => {
//   const msg = "Bot is online";

//   // await web.chat.postMessage({
//   //   channel: "#a-chatbot",
//   //   text: msg,
//   // });
//   console.log(msg);
// });

// rtm.on("slack_event", async (type, event) => {
//   console.log(event);
//   if (event && event.type === "message") {
//     if (
//       event.text === "<@U01QEG245FU>" ||
//       event.text === "Hello <@U01QEG245FU>"
//     ) {
//       welcomeMessage(event.channel);
//     }
//   }
// });

// async function welcomeMessage(channel) {
//   await web.chat.postMessage({
//     channel,
//     text: "Welcome. How are you doing?",
//     response_type: "in_channel",
//     attachments: [
//       {
//         fallback: "C'mon buddy, tell me how ya doing.",
//         color: "#3AA3E3",
//         attachment_type: "default",
//         callback_id: "user_feeling",
//         actions: [
//           {
//             name: "feelings",
//             text: "How are you feeling...",
//             type: "select",
//             options: [
//               {
//                 text: "Doing Well",
//                 value: "Doing Well",
//               },
//               {
//                 text: "Neutral",
//                 value: "Neutral",
//               },
//               {
//                 text: "Feeling Lucky",
//                 value: "Feeling Lucky",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   });
// }