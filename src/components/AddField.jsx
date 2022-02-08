import React from "react";

import { Button, Checkbox, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { addTasksThunk } from "../redux/actions/tasks_action";
import { useDispatch } from "react-redux";

export const AddField = () => {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");
  const [checkValue, setCheckValue] = React.useState(false);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleClickAddTaskCheck = (value) => {
    if (!value) {
      setCheckValue(false);
    } else {
      setCheckValue(!checkValue);
    }
  };

  const addTask = (text, completed) => {
    if (text) {
      dispatch(addTasksThunk(text, completed));
      setInput("");
      handleClickAddTaskCheck(false);
    }
  };

  return (
    <div className="field">
      <Checkbox
        onClick={handleClickAddTaskCheck}
        checked={checkValue}
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <TextField
        onChange={onChangeInput}
        placeholder="Введите текст задачи..."
        variant="standard"
        value={input}
        fullWidth
      />
      <Button onClick={() => addTask(input, checkValue)}>
        <AddIcon />
      </Button>
    </div>
  );
};
