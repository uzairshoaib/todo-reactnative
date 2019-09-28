import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

const Input = ({ value, handleChange }) => (
  <View style={styles.inputContainer}>
    <TextInput style={styles.input}
              value={value}
              placeholder="What needs to be done?"
              placeholderTextColor="#CACACA"
              selectionColor="#666666"
              onChangeText={handleChange}
     />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft:20,
    marginRight:20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2}
  },
  input: {
    height: 60,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%'
  }
})

export default Input