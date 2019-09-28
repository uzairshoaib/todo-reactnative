import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Heading from './components/Heading'
import Input from './components/Input'
import Button from './components/Button'
import TodoList from './components/TodoList'
import TabBar from './components/TabBar'

let todoIndex = 0;

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState('All');

  const addTodo = () => {
    if (inputValue.match(/^\s*$/)) {
      alert('Please add todo title')
      return
    }
    const todo = {
      title: inputValue,
      id: todoIndex,
      complete: false
    }
    todoIndex++;
    setTodos([...todos, todo]);
    setInputValue('')
  }

  const completeTodo = (todoId) => {
    let newTodos = todos;
    newTodos.forEach(todo => {
      if(todo.id === todoId) {
        todo.complete = true;
      }
    });
    setTodos(newTodos);
  }

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(newTodos);
  }

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTabs="always" style={styles.content}>
        <Heading>Todos</Heading>
        <Input value={inputValue} handleChange={text => setInputValue(text) }/>
        <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} type={type} />
        <Button handlePress={addTodo}>Submit</Button>
      </ScrollView>
      <TabBar type={type} setType={setType} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
});
