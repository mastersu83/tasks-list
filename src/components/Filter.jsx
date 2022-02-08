import React from "react";
import { Tab, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTabAction } from "../redux/actions/filter_action";

const filterIndex = {
  all: 0,
  active: 1,
  completed: 2,
};

const Filter = () => {
  const dispatch = useDispatch();
  const filterBy = useSelector((state) => state.filter.filterBy);

  const toggleTab = (filter) => {
    dispatch(toggleTabAction(filter));
  };

  // const setFilter = (_, newIndex) => {
  //   const status = Object.keys(filterIndex)[newIndex];
  //   dispatch({
  //     type: "SET_FILTER",
  //     payload: status,
  //   });
  // };

  return (
    <>
      <Tabs value={filterIndex[filterBy]}>
        <Tab onClick={() => toggleTab("all")} label="Все" />
        <Tab onClick={() => toggleTab("active")} label="Активные" />
        <Tab onClick={() => toggleTab("completed")} label="Завершённые" />
      </Tabs>
    </>
  );
};

export default Filter;
