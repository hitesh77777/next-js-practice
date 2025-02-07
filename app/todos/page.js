"use client";
import { Button, Input } from "antd";
import React, { useState, useRef } from "react";
import DemoCalender from "../components/DemoCalender";

function Todos() {
  const [todoArr, setTodoArr] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [seleVal, setSeleVal] = useState("");
  const [inputValue, setInputValue] = useState("");
  console.log(`hello ~ file: page.js:10 ~ Todos ~ inputValue:`, seleVal);

  const inputRef = useRef(null);

  const onEdit = (val, i) => {
    setEditIndex(i);
    setInputValue(val.title);
    inputRef.current.focus();
  };

  const onComplete = (i) => {
    setTodoArr((prev) =>
      prev.map((item, index) =>
        index === i ? { ...item, completed: true } : item
      )
    );
  };

  const onDelete = (i) => {
    setTodoArr((prev) => prev.filter((_, index) => index !== i));
  };

  const onAddEdit = () => {
    if (editIndex !== null) {
      setTodoArr((prev) =>
        prev.map((item, index) =>
          index === editIndex ? { ...item, title: inputValue } : item
        )
      );
      setEditIndex(null);
    } else {
      setTodoArr((prev) => [...prev, { title: inputValue, completed: false }]);
    }
    setInputValue(""); // Clear the input field
  };

  return (
    <div>
      <h1>Todos</h1>
      <select
        value={seleVal}
        onChange={(e) => {
          setSeleVal(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option value="" disabled hidden>
          Select status
        </option>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <Input
        style={{ width: "200px" }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
      />
      <Button onClick={onAddEdit}>
        {editIndex !== null ? "Update" : "Add"}
      </Button>
      <div>
        {todoArr.map((e, i) => (
          <div key={i}>
            <p>{e?.title}</p>
            <p>{e?.completed ? "Completed" : ""}</p>
            <Button onClick={() => onEdit(e, i)}>Edit</Button>
            <Button onClick={() => onComplete(i)}>Complete</Button>
            <Button onClick={() => onDelete(i)}>Delete</Button>
          </div>
        ))}
      </div>
      <div>{/* <DemoCalender /> */}</div>
    </div>
  );
}

export default Todos;
