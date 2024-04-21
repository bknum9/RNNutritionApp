import { StyleSheet } from 'react-native'
import React from 'react'
import SignedOutStack from './stacks/SignedOutStack';


const App = () => {


  return (
    <SignedOutStack />
  )
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center'
  }
})

export default App