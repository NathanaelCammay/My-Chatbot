class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello Nathan.");
    this.addMessageToState(message);
    const selections = this.createChatBotMessage(
      "What do you need assistance with today :) ?",
      {
        widget: "options",
      }
    );
    this.addMessageToState(selections);
  };

  //Log Request selection

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Okay! What request do you have for me?",
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };

  // Bot respones to the Log Request selection

  dataTopUp = () => {
    const message = this.createChatBotMessage(
      "Click on 'Log Request' on your sidebar and complete a log request form."
    );

    this.addMessageToState(message);
  };

  installationAssistance = () => {
    const message = this.createChatBotMessage(
      "Click on 'Log Request' on your sidebar and complete a log request form, explaining the nature of your required installation."
    );

    this.addMessageToState(message);
  };

  statusRequest = () => {
    const message = this.createChatBotMessage(
      "Please click on the 'Request status' tab on your left to view the status of all your requests."
    );

    this.addMessageToState(message);
  };

  //Handles "Report issue" selection

  reportIssue = () => {
    const message = this.createChatBotMessage(
      "Please go to the 'Report Issue' tab on your left and complete an issue log form."
    );

    this.addMessageToState(message);
  };

  //Handles the "View my assets selection"

  viewAssets = () => {
    const message = this.createChatBotMessage(
      "Our sidebar contains tabs with updated information of all the Mindworx assets you are currently using."
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
