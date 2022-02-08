import { Button, Divider, List, Paper } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import React from "react";
import RemoveAllTaskPopup from "./components/RemoveAllTaskPopup";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./components/Filter";
import {
  checkAllAction,
  clearAllTasksAction,
  getTasks,
} from "./redux/actions/tasks_action";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [removeAllTaskPopup, setRemoveAllTaskPopup] = React.useState(false);
  const [toggleAllCheck, setToggleAllCheck] = React.useState(true);

  const clearAllTasks = (e) => {
    if (state.tasks.length) {
      setRemoveAllTaskPopup(!removeAllTaskPopup);
      if (!e) {
        dispatch(clearAllTasksAction());
      }
    }
  };

  const checkAll = () => {
    if (state.tasks.length) {
      setToggleAllCheck(!toggleAllCheck);
      dispatch(checkAllAction(toggleAllCheck));
    }
  };

  const taskItem = state.tasks
    .filter((t) => {
      if (state.filter.filterBy === "all") {
        return true;
      }
      if (state.filter.filterBy === "completed") {
        return t.completed;
      }
      if (state.filter.filterBy === "active") {
        return !t.completed;
      }
    })
    .map((t, index) => (
      <Item key={index} id={t.id} text={t.text} completed={t.completed} />
    ));

  React.useEffect(() => {
    dispatch(getTasks(dispatch));
  }, []);

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={1}>
          <h4>Список задач</h4>
        </Paper>
        <AddField />
        <Divider />
        <Filter />
        <Divider />
        <List>{taskItem}</List>
        <Divider />
        <div className="check-buttons">
          <Button
            className="check-all"
            disabled={!state.tasks.length}
            onClick={checkAll}
          >
            {toggleAllCheck ? "Отметить всё" : "Снять отметки"}
          </Button>
          <Button
            disabled={!state.tasks.length || removeAllTaskPopup}
            onClick={clearAllTasks}
          >
            Очистить
          </Button>
        </div>
      </Paper>
      <RemoveAllTaskPopup
        removeAllTaskPopup={removeAllTaskPopup}
        clearAllTasks={clearAllTasks}
      />
    </div>
  );
}

export default App;
