import React from "react";
import { Button, Paper } from "@mui/material";

const RemoveTaskPopup = ({ removeAllTaskPopup, clearAllTasks }) => {
  return (
    <div className={`popupCleanAll ${removeAllTaskPopup ? "open" : ""}`}>
      <div className="check-buttons remove-popup">
        <Paper className="header header-remove-popup" elevation={1}>
          <h4>Удалить все задачи?</h4>
        </Paper>
        <Button onClick={() => clearAllTasks(false)}>Да</Button>
        <Button onClick={() => clearAllTasks(true)}>Отмена</Button>
      </div>
    </div>
  );
};

export default RemoveTaskPopup;
