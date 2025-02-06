import React, { useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface DialogComponentProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const DialogComponent: React.FC<DialogComponentProps> = ({ isOpen, onClose, url }) => {
  useEffect(() => {
    if (isOpen) {
      Office.context.ui.displayDialogAsync(url, { height: 50, width: 50 }, (result) => {
        if (result.status === Office.AsyncResultStatus.Failed) {
          console.error(result.error.message);
        } else {
          const dialog = result.value;
          dialog.addEventHandler(Office.EventType.DialogMessageReceived, (arg: any) => {
            console.log('Message received from dialog:', arg.message);
            dialog.close();
            onClose();
          });
        }
      });
    }
  }, [isOpen, url, onClose]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Dialog Example</DialogTitle>
      <DialogContent>
        <p>Opening a dialog...</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;