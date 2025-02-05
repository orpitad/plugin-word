import * as React from "react";
import { Button, ButtonProps } from "@fluentui/react-components";
import { Dialog, DialogProps } from "@fluentui/react-components";

const Ribbon: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChatBotClick = () => {
    // Code to open the chatbot
  };

  const handleOpenDialogClick = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(!isOpen);
  };

  const chatBotButtonProps: ButtonProps = {
    content: "ChatBot",
    appearance: "primary",
    onClick: handleChatBotClick,
  };

  const openDialogButtonProps: ButtonProps = {
    content: "Open Dialog",
    onClick: handleOpenDialogClick,
  };

  const dialogProps: DialogProps = {
    open: isOpen,
    onOpenChange: handleCloseDialog,
    children: (
      <div>
        <input type="text" placeholder="Enter some text" />
        <button onClick={handleCloseDialog}>Close</button>
      </div>
    ),
    modalType: "modal",
  };

  return (
    <div>
      <Button {...chatBotButtonProps} />
      <Button {...openDialogButtonProps} />
      <Dialog {...dialogProps} />
    </div>
  );
};

export default Ribbon;
