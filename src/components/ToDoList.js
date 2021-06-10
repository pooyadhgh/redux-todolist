import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../Actions';
import ToDo from './ToDo';

const ToDoList = () => {
  const dispatch = useDispatch();

  const [todos, setTodos] = useState([]);
  const state = useSelector(state => state);

  const getVisibleTodo = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'SHOW_ACTIVES':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };
  const filteredTodos = getVisibleTodo(state.todos, state.visibilityFilter);

  useEffect(() => {
    setTodos(filteredTodos);
  }, [state.todos, state.visibilityFilter]);

  return (
    <div>
      <ul>
        {todos.map(i => (
          <ToDo key={i.id} {...i} onClick={() => dispatch(toggleTodo(i.id))} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
