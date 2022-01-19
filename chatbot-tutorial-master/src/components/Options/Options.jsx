import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Log Request",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Report Issue", handler: props.actionProvider.reportIssue, id: 2 },
    { text: "View my assets", handler: props.actionProvider.viewAssets, id: 3 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
