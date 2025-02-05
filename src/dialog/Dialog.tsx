import * as React from "react";
import * as ReactDOM from "react-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";



const DialogBox = () => {
//   const [hideDialog, setHideDialog] = React.useState(false);

//   const closeDialog = () => {
//     setHideDialog(true);
//     Office.context.ui.messageParent("close");
//   };
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  return (
    <div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            TESTING TEXT
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      {/* <Dialog
        hidden={hideDialog}
        onDismiss={closeDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: "Dialog Title",
          subText: "Enter some text here."
        }}
      >
        <TextField label="Input Text" />
        <DialogFooter>
          <PrimaryButton text="Close" onClick={closeDialog} />
        </DialogFooter>
      </Dialog> */}
    </div>
  );
};

ReactDOM.render(<DialogBox />, document.getElementById("container"));