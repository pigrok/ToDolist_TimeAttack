import React from "react";
import uuid from "react-uuid";
import { useState } from "react";

const Input = ({ toDos, setToDos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <>
      {" "}
      <h3>INPUT</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const newToDo = {
            id: uuid(),
            title,
            content,
            isDone: false,
          };
          setToDos([...toDos, newToDo]);

          setTitle("");
          setContent("");
        }}
      >
        <input
          type="text"
          placeholder="Title Enter"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Content Enter"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></input>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Input;
