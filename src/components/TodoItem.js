import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({ item, handleDelete, handleToggle }) => {
  const { id, userId } = item;

  return (
    <div>
      <li className='list-item'>
        <span className='title'>{item.title}</span>

        <span>
          <button onClick={() => handleDelete(id)} className='btn-delete'>
            Delete
          </button>
        </span>
        <span>
          <button
            onClick={() => handleToggle(id)}
            className='btn-primary btn-toggle'
          >
            Toggle
          </button>
        </span>
        <span>
          {item.completed ? <span>completed&#10003;</span> : 'pending'}
        </span>
        <Link to={`/users/${userId}`} className='btn-primary'>
          User Details
        </Link>
      </li>
    </div>
  );
};

export default TodoItem;
