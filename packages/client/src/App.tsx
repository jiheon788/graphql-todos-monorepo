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

interface TodoType {
  todos: {
    id: string;
    text: string;
    completed: boolean;
  }[];
}

function App() {
  const [value, setValue] = useState("");

  const { loading, error, data } = useQuery<TodoType>(GET_TODOS);
  const [addTodo] = useMutation(ADD_TODO, {
    /**
     * 낙관적 업데이트는 서버 응답이 성공할 것이라고 "낙관적"으로 가정하고, 그에 따라 UI를 미리 업데이트
     * 1. 뮤테이션이 서버로 전송되고 서버로부터 응답을 받기 전에 사용할 임시 응답을 정의
     * 2. 임시 응답은 실제 서버 응답이 도착할 때까지 UI에 표시
     */
    optimisticResponse: {
      addTodo: {
        id: "temp-id",
        text: value,
        completed: false,
        __typename: "Todo",
      },
    },
    /**
     * 뮤테이션이 성공적으로 완료된 후 호출
     * Apollo 캐시를 직접 조작하여, 뮤테이션의 결과를 반영
     * 서버로부터 받은 최종 데이터로 클라이언트의 UI를 업데이트
     */
    update: (cache, { data: { addTodo } }) => {
      // 캐시에서 현재의 todos 쿼리 결과를 가져옵니다.
      const _data = cache.readQuery<{ todos: TodoType[] }>({
        query: GET_TODOS,
      });

      // 새로운 todo를 todos 배열에 추가
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: [addTodo, ...(_data?.todos ?? [])] },
      });
    },
  });

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
            addTodo({ variables: { text: value } });
          }}
        >
          Add Todo
        </button>
        <ul>
          {data &&
            data.todos.map((todo) => (
              <li key={todo.id}>
                <div>
                  <input type="checkbox" defaultChecked={todo.completed} />
                  <label>{todo.text}</label>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
