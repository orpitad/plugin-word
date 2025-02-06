import React, { useState } from 'react';
import { Button } from '@mui/material';
import DialogComponent from './components/DialogComponent';

const App: React.FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <h1>Office Word Add-in</h1>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Open Dialog
      </Button>
      <DialogComponent
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        url="https://your-dialog-url.com/dialog.html"
      />
    </div>
  );
};

export default App;