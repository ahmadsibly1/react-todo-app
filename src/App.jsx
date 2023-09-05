import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have Lunch with guru domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study react with ninja ken",
      completed: false,
    },
  ]);

  // funtion toogle complete
  const toggleCompleted = (todoId) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  return (
    <div style={style.container}>
      <h1 style={style.title}>My Todo List</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

const style = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
  title: {
    fontSize: "36px",
  },
};

export default App;
