Office.onReady((info) => {
    if (info.host === Office.HostType.Word) {
      ReactDOM.render(<DialogBox />, document.getElementById("container"));
    }
  });