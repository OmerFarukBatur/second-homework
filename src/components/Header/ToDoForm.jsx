import React from 'react';
import { Formik, Field, Form } from "formik";
import { useTodo } from '../../Context/ToDoContext';


function ToDoForm() {
  const {addTodo} = useTodo();

  return (
    <Formik
       initialValues={{ text: ''}}  
       onSubmit={ (values,bag) =>{
        
        addTodo(values.text);
        
        bag.resetForm();
       }}   
     >     
    <Form>
		<Field name='text' id='text' className="new-todo" placeholder="What needs to be done?" autoFocus />
	</Form>
  </Formik>
  )
}

export default ToDoForm
