import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'

const Todo = ({ todo, handleComplete, handleDelete }) => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}>
      {todo.title}
    </Text>
    <View style={styles.buttons}>
      <Button handlePress={e => handleComplete(todo.id)} size="small" style={{ alignSelf: 'flex-end' }} styleText={{ fontWeight: 'bold', color: 'green'}}>Complete</Button>
      <Button handlePress={e => handleDelete(todo.id)} size="small" style={{ alignSelf: 'flex-end' }} styleText={{ color: 'rgba(175, 47, 47, 1)' }}>Delete</Button>
    </View>
  </View>
)

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#ededed",
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoText: {
    fontSize: 17
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

export default Todo