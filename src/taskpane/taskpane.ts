/* global Word console */

export async function insertText(text: string) {
  // Write text to the document.
  try {
    await Word.run(async (context) => {
      let body = context.document.body;
      body.insertParagraph(text, Word.InsertLocation.end);
      await context.sync();
    });
  } catch (error) {
    console.log("Error: " + error);
  }
}

function openDialog() {
  Office.context.ui.displayDialogAsync(
    window.location.origin + "/dialog.html",
    { height: 50, width: 50, promptBeforeOpen: false },
    function (result) {
      if (result.status === Office.AsyncResultStatus.Failed) {
        console.error(result.error.message);
      } else {
        const dialog = result.value;
        dialog.addEventHandler(Office.EventType.DialogMessageReceived, (arg: any) => {
          const messageFromDialog = arg.message;
          console.log("Message from dialog:", messageFromDialog);
          dialog.close();

          // Handle the message (e.g., update the task pane UI)
          document.getElementById("output").innerText = `Dialog submitted: ${messageFromDialog}`;
        });
      }
    }
  );
}

// Add a button to the task pane
document.getElementById("open-dialog-button").addEventListener("click", openDialog);
