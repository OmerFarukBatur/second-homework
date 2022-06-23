import React from 'react';
import ToDoForm from './ToDoForm';

function Header() {
  return (
    <header className='header'>
      <h1>todos</h1>
      <ToDoForm/>
    </header>    
  )
}

export default Header
