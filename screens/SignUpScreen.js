import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { firebaseAuth } from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpScreen = ({navigation}) => {

  const auth = firebaseAuth
  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response)
    }
    catch (error) {
      console.log(error)
      alert('sign up failed')
    }
  }


  const signupFormSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    name: Yup.string().required('Name is required').min(2, 'Name must have 2 characters'),
    password: Yup.string().required('Password is required').min(8, 'Password must have 8 characters'),
    passwordConfirmation: Yup.string().label('Confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  })

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
            <Image source={{uri:'https://img.icons8.com/cotton/452/beefburger.png', height: 100, width: 100}}/>
        </View>
    <View style={styles.wrapper}>
      <Formik
      initialValues={{email:'', name:'', password:'', passwordConfirmation:''}}
      onSubmit={(values) => {

      }}
      validationSchema={signupFormSchema}
      validateOnMount={true}
      >

        {({handleChange, handleBlur, handleSubmit, values, isValid, errors }) => (

      <>
       <View style={[styles.inputField, 
       {borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'}
      ]}>
      <TextInput 
      placeholderTextColor='#444'
      placeholder='Email'
      autoCapitalize='none'
      keyboardType='email-address'
      autoFocus={true}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      value={values.email}
      />
      <Text style={{color:'red', fontSize:10}}>{errors.email}</Text>
      </View>

      <View style={[styles.inputField, 
      {borderColor: 1 > values.name.length || values.name.length >= 2 ? '#ccc' : 'red'}
      ]}>
      <TextInput 
      placeholderTextColor='#444'
      placeholder='Name'
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={handleChange('name')}
      onBlur={handleBlur('name')}
      value={values.name}
      />
      <Text style={{color:'red', fontSize:10}}>{errors.name}</Text>
      </View>

      <View style={[styles.inputField, 
      {borderColor: 1 > values.password.length || values.password.length > 7 ? '#ccc' : 'red'}
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
      <Text style={{color:'red', fontSize:10}}>{errors.password}</Text>
      </View>

      <View style={[styles.inputField, 
      {borderColor: values.password === values.passwordConfirmation ? '#ccc' : 'red'}
      ]}>
      <TextInput 
      placeholderTextColor='#444'
      placeholder='Confirm password'
      autoCapitalize='none'
      autoCorrect={false}
      secureTextEntry={true}
      textContentType='password'
      onChangeText={handleChange('passwordConfirmation')}
      onBlur={handleBlur('passwordConfirmation')}
      value={values.passwordConfirmation}
      />
      <Text style={{color:'red', fontSize:10}}>{errors.passwordConfirmation}</Text>
      </View>

      <Pressable 
      titleSize={20} 
      style={styles.button(isValid)}
      onPress={() => {
        handleSubmit()
        signUp(auth, values.email, values.password)
      }}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color:'#6BB0F5', marginLeft: 5}}>Login</Text>
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
    backgroundColor:'#fff',
    paddingTop: 50,
    paddingHorizontal: 12,
},
logoContainer: {
    alignItems:'center',
    marginTop: 60,
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

export default SignUpScreen