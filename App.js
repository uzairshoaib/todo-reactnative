import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Heading from './components/Heading'
import Input from './components/Input'
import Button from './components/Button'
import TodoList from './components/TodoList'

let todoIndex = 0;

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState('all');

  const addTodo = () => {
    if (inputValue.match(/^\s*$/)) {
      alert('Please add todo title')
      return
    }
    const todo = {
      title: inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++;
    setTodos([...todos, todo]);
    setInputValue('')
  }

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTabs="always" style={styles.content}>
        <Heading>Todos</Heading>
        <Input value={inputValue} handleChange={text => setInputValue(text) }/>
        <TodoList todos={todos} />
        <Button handleSubmit={addTodo}>Submit</Button>
      </ScrollView>
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
