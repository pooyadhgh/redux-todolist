import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Actions';

const AddToDo = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const inputHandler = e => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={input}
          onChange={e => inputHandler(e)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddToDo;
