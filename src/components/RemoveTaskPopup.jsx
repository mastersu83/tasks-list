import React from "react";
import { Button, Paper } from "@mui/material";

const RemoveTaskPopup = ({ removeTaskPopup, onRemoveClick }) => {
  return (
    <div className={`popupClean ${removeTaskPopup ? "open" : ""}`}>
      <div className="check-buttons remove-popup">
        <Paper className="header header-remove-popup" elevation={1}>
          <h4>Удалить задачу?</h4>
        </Paper>
        <Button onClick={() => onRemoveClick(true)}>Да</Button>
        <Button onClick={() => onRemoveClick(false)}>Отмена</Button>
      </div>
    </div>
  );
};

export default RemoveTaskPopup;
