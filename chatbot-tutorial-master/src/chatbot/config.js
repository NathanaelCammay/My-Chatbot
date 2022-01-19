import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import LogRequest from "../components/LogRequest/LogRequestOptions";
import BotAvatar from "../components/BotAvatar/BotAvatar";

const config = {
  botName: "Mandy",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  // lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#f37521",
    },
    chatButton: {
      backgroundColor: "#f37521",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hello, I'm Mandy.`
      // {
      //   widget: "options",
      // }
    ),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <LogRequest {...props} />,
    },
  ],
};

export default config;
