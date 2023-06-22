import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import TodoList from "./components/TodoList";
import Input from "./components/Input";

function App() {
  const initialTodo = [
    {
      id: uuid(),
      title: "TITLE1",
      content: "CONTENT",
      isDone: false,
    },
    {
      id: uuid(),
      title: "TITLE2",
      content: "CONTENT",
      isDone: true,
    },
  ];

  const [toDos, setToDos] = useState(initialTodo);

  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");

  return (
    <>
      <header
        style={{
          backgroundColor: "#abe9f5",
          padding: "10px",
        }}
      >
        Header
      </header>
      <main
        style={{
          backgroundColor: "#cbf5ab",
          padding: "10px",
        }}
      >
        {/* 체크 */}
        <Input toDos={toDos} setToDos={setToDos} />
        <TodoList toDos={toDos} setToDos={setToDos} isDone={false} />
        <TodoList toDos={toDos} setToDos={setToDos} isDone={true} />
      </main>
      <footer
        style={{
          backgroundColor: "#f7c8ec",
          padding: "10px",
        }}
      >
        Footer
      </footer>
    </>
  );
}

export default App;
