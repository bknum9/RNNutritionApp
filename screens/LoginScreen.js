import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({navigation}) => {

  const loginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string().required().min(7, 'your password must have 8 characters')
  })

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
            <Image source={{uri:'https://img.icons8.com/cotton/452/beefburger.png', height:100, width:100}}/>
        </View>

    <View style={styles.wrapper}>
      <Formik
      initialValues={{email:'', password:''}}
      onSubmit={(values) => {
        onLogin(values.email, values.password)
      }}
      validationSchema={loginFormSchema}
      validateOnMount={true}
      >

        {({handleChange, handleBlur, handleSubmit, values, isValid }) => (

      <>
       <View style={[styles.inputField, 
       {borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'}
      ]}>
      <TextInput 
      placeholderTextColor='#444'
      placeholder='Email'
      autoCapitalize='none'
      keyboardType='email-address'
      textContentType='emailAddress'
      autoFocus={true}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      value={values.email}
      />
      </View>

      <View style={[styles.inputField, 
      {borderColor: 1 > values.password.length || values.password.length > 6 ? '#ccc' : 'red'}
      ]}>
      <TextInput 
      placeholderTextColor='#444'
      placeholder='Password'
      autoCapitalize='none'
      autoCorrect={false}
      secureTextEntry={true}
      textContentType='password'
      onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      value={values.password}
      />
      </View>
      <View style={{alignItems:'flex-end', marginBottom:30,}}>
        <Text style={{color:'#6BB0F5'}}>Forgot Password?</Text>
      </View>

      <TouchableOpacity titleSize={20} 
      style={styles.button(isValid)}
      onPress={() => {
        handleSubmit;
        navigation.navigate('SignedInStack')
      }}
      disabled={!isValid}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
            <Text style={{color:'#6BB0F5'}}> Sign up</Text>
        </TouchableOpacity>
      </View>
      </>
        )}
      </Formik>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    paddingTop: 50,
    paddingHorizontal:12,
},
logoContainer: {
  alignItems:'center',
  marginTop:60,
},
    inputField: {
        borderRadius:4,
        padding:8,
        backgroundColor:'#FAFAFA',
        marginBottom:10,
        borderWidth:1
    },
    wrapper: {
        marginTop:80
    },
    button: (isValid) => ({
        backgroundColor: isValid ? '#050505': '#8f9193',
        alignItems:'center',
        justifyContent:'center',
        minHeight:42,
        borderRadius:4,
    }),
    buttonText:{
        fontWeight:'600',
        color:'#fff',
        fontSize:20
    },
    signupContainer: {
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop:50,
    },
    inputField: {
      borderRadius:4,
      padding:8,
      backgroundColor:'#FAFAFA',
      marginBottom:10,
      borderWidth:1
  },
  wrapper: {
      marginTop:80
  },
  button: (isValid) => ({
      backgroundColor: isValid ? '#0096F6': '#9ACAF7',
      alignItems:'center',
      justifyContent:'center',
      minHeight:42,
      borderRadius:4,
  }),
  buttonText:{
      fontWeight:'600',
      color:'#fff',
      fontSize:20
  },
  signupContainer: {
      flexDirection:'row',
      width:'100%',
      justifyContent:'center',
      marginTop:50,
  }
})

export default LoginScreen