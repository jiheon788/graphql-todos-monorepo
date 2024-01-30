import React, { useState } from "react";
import "./App.css";
import { useQuery, useMutation, gql } from "@apollo/client";

// GraphQL 쿼리 정의
const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      text
      completed
    }
  }
`;

// GraphQL 뮤테이션 정의
const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;

function App() {
  const { loading, error, data, refetch } = useQuery(GET_TODOS);
  const [value, setValue] = useState("");
  const [addTodo] = useMutation(ADD_TODO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <div>
        <h3>My Todo List</h3>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addTodo({ variables: { text: value } }).then((res) => {
              refetch();
            });
          }}
        >
          Add Todo
        </button>
        <ul>
          {data.todos.map((todo: { id: string; text: string }) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
