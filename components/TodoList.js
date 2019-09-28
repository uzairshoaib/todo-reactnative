import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos, completeTodo, deleteTodo, type }) => {
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case 'All':
        return todos;
      case 'Complete':
        return todos.filter(t => t.complete)
      case 'Active':
        return todos.filter(t => !t.complete);
    }
  }
  todos = getVisibleTodos(todos, type);
  return (
    <View>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleComplete={completeTodo}
          handleDelete={deleteTodo} />
      ))}
    </View>
  ); 
}


export default TodoList