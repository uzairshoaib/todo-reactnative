import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const Button = ({ children, handlePress, size = "large", style = {}, styleText = {} }) => {
  console.log(style);
  return (<View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor="#efefef"
      style={{ ...styles[size], ...style }}
      onPress={handlePress}>
      <Text style={ {...styles.submit, ...styleText} }>
        {children}
      </Text>
    </TouchableHighlight>
  </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end'
  },
  large: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  small: {
    padding: 7,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5
  },
  submit: {
    color: '#666666',
    fontWeight: 'bold'
  }
})

export default Button