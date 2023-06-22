import React from "react";

const TodoList = ({ toDos, setToDos, isDone }) => {
  return (
    <>
      <div>
        <h2>{isDone ? "DONELIST" : "TODOLIST"}</h2>
        {toDos
          .filter((t) => t.isDone === isDone)
          .map((toDo) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>{toDo.id}</p>
                <p>{toDo.title}</p>
                <p>{toDo.content}</p>
                <p>{toDo.isDone.toString()}</p>

                <button
                  onClick={() => {
                    const newToDos = toDos.filter(
                      (filteredToDo) => filteredToDo.id !== toDo.id
                    );

                    setToDos(newToDos);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    const doneToDos = toDos.map((item) => {
                      if (item.id === toDo.id) {
                        return {
                          ...item,
                          // 체크
                          isDone: !item.isDone,
                        };
                      } else {
                        return item;
                      }
                    });

                    setToDos(doneToDos);
                  }}
                >
                  {isDone ? "Cancel" : "Complete"}
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TodoList;
