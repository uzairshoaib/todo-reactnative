import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

const Heading = ({ children }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>
      {children}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    marginTop: 80
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'rgba(175, 47, 47, 0.25)',
    fontWeight: '100'
  }
});

export default Heading