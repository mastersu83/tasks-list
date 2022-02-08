import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveTaskPopup from "./RemoveTaskPopup";
import { useDispatch } from "react-redux";
import { removeTaskThunk, taskCheckThunk } from "../redux/actions/tasks_action";

export const Item = ({ text, completed, id }) => {
  console.log(id);
  const dispatch = useDispatch();
  const [removeTaskPopup, setRemoveTaskPopup] = React.useState(false);

  const handleTaskCheck = () => {
    dispatch(taskCheckThunk(id, completed));
  };

  const removeTask = () => {
    dispatch(removeTaskThunk(id));
  };

  const onRemoveClick = (e) => {
    if (e) {
      setRemoveTaskPopup(false);
      removeTask(id);
    } else {
      setRemoveTaskPopup(false);
    }
  };
  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          onClick={() => handleTaskCheck(id)}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          checked={completed}
        />
        <Typography className="item-text">{text}</Typography>
        <div className="item-buttons d-flex">
          <IconButton>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton
            disabled={removeTaskPopup}
            onClick={() => setRemoveTaskPopup(true)}
          >
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
      <RemoveTaskPopup
        removeTaskPopup={removeTaskPopup}
        onRemoveClick={onRemoveClick}
      />
    </ListItem>
  );
};
