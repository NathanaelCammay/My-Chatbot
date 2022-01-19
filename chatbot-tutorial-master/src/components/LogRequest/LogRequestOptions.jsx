import React from "react";

import "./LogRequestOptions.css"

const LogRequestOptions = (props) => {
  const options = [
    {
      text: "Data top-up", handler: props.actionProvider.dataTopUp, id: 1,},
    { text: "Installation assistance", handler: props.actionProvider.installationAssistance, id: 2 },
    { text: "Request Status", handler: props.actionProvider.statusRequest, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default LogRequestOptions;