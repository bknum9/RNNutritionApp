import React, { useState } from "react";
import { View, 
    Text, 
    StyleSheet, 
    TextInput,
    TouchableOpacity,
    Pressable,
    Alert,
} from 'react-native'
import DismissKeyboard from "../components/DismissKeyboard";
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { showMessage, hideMessage } from "react-native-flash-message";




const ProfileScreen = ({navigation}) => {


  const profileSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    name: Yup.string().required('Name is required').min(2, 'Name must have 2 characters'),
    password: Yup.string().required('Password is required').min(8, 'Password must have 8 characters'),
    passwordConfirmation: Yup.string().label('Confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  })

  return (
    
    <Formik
    initialValues={{email:'example@gmail.com', name:'john smith', password:'12345678', passwordConfirmation:'12345678'}}
    onSubmit={(values) => {
      console.log(values)
    }}
    validationSchema={profileSchema}
    validateOnMount={true}
    >

      {({handleChange, handleBlur, handleSubmit, values, isValid, errors }) => (
      <>
      <DismissKeyboard>
      <View style={styles.container}>
      <View style={[styles.inputField, 
      {borderColor: 1 > values.name.length || values.name.length > 1 ? '#ccc' : 'red'}
      ]}>
      <Text style={styles.input}>Name</Text>
      <Text style={{color:'red', fontSize:8}}>{errors.name}</Text>
      <TextInput 
      style= {styles.input}
      placeholderTextColor='#c8cacd'
      placeholder='Name'
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={handleChange('name')}
      onBlur={handleBlur('name')}
      value={values.name}
      />
      </View>

      <View style={[styles.inputField, 
       {borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'}
      ]}>
      <Text style={styles.input}>Email</Text>
      <Text style={{color:'red', fontSize:8}}>{errors.email}</Text>
      <TextInput 
      style={styles.input} 
      placeholderTextColor='#c8cacd'
      placeholder='Email'
      autoCapitalize='none'
      keyboardType='email-address'
      autoFocus={true}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      value={values.email}
      />
     </View>

      <View style={[styles.inputField, 
      {borderColor: 1 > values.password.length || values.password.length > 7 ? '#ccc' : 'red'}
      ]}>
      <Text style={styles.input}>Password</Text>
      <Text style={{color:'red', fontSize:8}}>{errors.password}</Text>
      <TextInput 
      style={styles.input} 
      placeholderTextColor='#c8cacd'
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

      <View style={[styles.inputField, 
      {borderColor: values.password === values.passwordConfirmation ? '#ccc' : 'red'}
      ]}>
      <Text style={styles.input}>Confirm Password</Text>
      <Text style={{color:'red', fontSize:8}}>{errors.passwordConfirmation}</Text>
      <TextInput 
      style={styles.input} 
      placeholderTextColor='#c8cacd'
      placeholder='Confirm Password'
      autoCapitalize='none'
      autoCorrect={false}
      secureTextEntry={true}
      textContentType='password'
      onChangeText={handleChange('passwordConfirmation')}
      onBlur={handleBlur('passwordConfirmation')}
      value={values.passwordConfirmation}
      />
      </View>

      <View>
      <Pressable
      style={styles.button(isValid)}
      onPress={() => {
        handleSubmit();
        // if (isValid === true) {
        //   Alert.alert(
        //     "Your profile has been updated",
        //     " "
        //     [
        //       { text: "Cancel",onPress: () => console.log("Cancel Pressed"),style: "cancel"},
        //       { text: "OK", onPress: () => console.log("OK Pressed") }
        //     ]
        //   );}
        showMessage({
          message: "Your profile has been updated",
          type: "success",
        });
      }}
      >
          <Text style={styles.submitText}>Save</Text>
          </Pressable>
      </View>
      
  
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
      <Text style={{color:'#6BB0F5', marginTop:70}}>Sign Out</Text>
    </TouchableOpacity>
    </View>
    </DismissKeyboard>
    </>
      )}
    
    </Formik>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
      paddingBottom:5,
      borderColor: 'black',
      marginBottom: 0,
      fontSize: 20,
  },
 input: {
    padding:10,
    width: 300,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    fontSize: 20,
    color:'#fff'
},
submit: {
    padding:15,
    margin:30,
    width: 200,
    borderColor: '#32CEC2',
    borderWidth: 2,
    borderRadius:10,
    alignItems: 'center',
    backgroundColor:'#32CEC2'
    },
submitText: {
  fontWeight:'600',
  color:'#fff',
  fontSize:20
},
inputField: {
  borderRadius:4,
  padding:8,
  backgroundColor:'#000',
  marginBottom:10,
  borderWidth:1
},
button: (isValid) => ({
  backgroundColor: isValid ? '#0096F6': '#9ACAF7',
  alignItems:'center',
  width:200,
  justifyContent:'center',
  minHeight:42,
  borderRadius:4,
  marginVertical:20,
}),
})

export default ProfileScreen