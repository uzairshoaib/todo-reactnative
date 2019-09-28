import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos }) => (
  <View>
    {todos.map(todo => (
      <Todo
        key={todo.todoIndex}
        todo={todo} />
    ))}
  </View>
)


export default TodoList