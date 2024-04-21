import {View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Pressable, 
  Alert,
  TouchableWithoutFeedback, 
  Keyboard} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik'
import * as Yup from 'yup'
import { showMessage, hideMessage } from "react-native-flash-message";

const CreateFoodScreen = () => {

  const createFoodSchema = Yup.object().shape({
    foodName:Yup.string().required('Required Field'),
    brandName:Yup.string(),
    calories:Yup.number().required(),
    proteinAmount: Yup.number().required(),
    carbAmount: Yup.number().required(),
    fatAmount: Yup.number().required(),
  })

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="light"/>
      <Formik
      initialValues={{ 
      foodName:'Food Name',
      brandName:'',
      calories:'',
      proteinAmount: '',
      carbAmount: '',
      fatAmount: ''
    }}
      onSubmit={(values) => {
        console.log(values)
      }}
      validationSchema={createFoodSchema}
      validateOnMount={true}
      >
         {({handleChange, handleBlur, handleSubmit, values, isValid, errors}) => (
      <>

      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
      <View style={[styles.inputField, 
      {borderColor: 1 > values.foodName.length || values.foodName.length > 1 ? '#ccc' : 'red'}
      ]}>
      <Text style={styles.input}> Food Name</Text>
      <Text style={{color:'red', fontSize:8}}>{errors.foodName}</Text>
      
      <TextInput 
      style= {styles.input}
      placeholderTextColor='#c8cacd'
      placeholder='Food Name'
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={handleChange('foodName')}
      onBlur={handleBlur('foodName')}
      value={values.foodName}
      />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
      <View style={[styles.inputField, 
      {borderColor: 1 > values.brandName.length || values.brandName.length > 1 ? '#ccc' : 'red'}
      ]}>
      <Text style={styles.input}> Food Name</Text>
      <Text style={{color:'red', fontSize:8}}>{errors.brandName}</Text>
     
      <TextInput 
      style= {styles.input}
      placeholderTextColor='#c8cacd'
      placeholder='Brand Name (optional)'
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={handleChange('brandName')}
      onBlur={handleBlur('brandName')}
      value={values.brandName}
      />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', borderTopWidth:1, width:'100%', padding:10}}>
          <Text style={styles.weight}>Calories</Text>
          <View style={[styles.inputField, 
            {borderColor: 0 < values.calories.length ? '#ccc' : 'red'}
               ]}>
          
          <TextInput 
          style={styles.weightInput} 
          placeholderTextColor='#c8cacd'
          placeholder='calories'
          keyboardType='number-pad'
          autoFocus={true}
          onChangeText={handleChange('calories')}
          onBlur={handleBlur('calories')}
          value={values.calories}
          />
          
          </View>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', borderTopWidth:1, width:'100%', padding:10}}>
          <Text style={styles.weight}>Protein</Text>
          <View style={[styles.inputField, 
            {borderColor: 0 < values.proteinAmount.length ? '#ccc' : 'red'}
               ]}>
          
          <TextInput 
          style={styles.weightInput} 
          placeholderTextColor='#c8cacd'
          placeholder='grams'
          keyboardType='number-pad'
          autoFocus={true}
          onChangeText={handleChange('proteinAmount')}
          onBlur={handleBlur('proteinAmount')}
          value={values.proteinAmount}
          />
          </View>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', borderTopWidth:1, width:'100%', padding:10}}>
          <Text style={styles.weight}>Carbohydrates</Text>
          <View style={[styles.inputField, 
            {borderColor: 0 < values.carbAmount.length ? '#ccc' : 'red'}
               ]}>
          <TextInput 
          style={styles.weightInput} 
          placeholderTextColor='#c8cacd'
          placeholder='grams'
          keyboardType='number-pad'
          autoFocus={true}
          onChangeText={handleChange('carbAmount')}
          onBlur={handleBlur('carbAmount')}
          value={values.carbAmount}
          />
          </View>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', borderTopWidth:1, width:'100%', padding:10}}>
          <Text style={styles.weight}>Fat</Text>
          <View style={[styles.inputField, 
            {borderColor: 0 < values.fatAmount.length ? '#ccc' : 'red'}
               ]}>
          <TextInput 
          style={styles.weightInput} 
          placeholderTextColor='#c8cacd'
          placeholder='grams'
          keyboardType='number-pad'
          autoFocus={true}
          onChangeText={handleChange('fatAmount')}
          onBlur={handleBlur('fatAmount')}
          value={values.fatAmount}
          />
          </View>
          </View>
          </TouchableWithoutFeedback>
      
      <View>
            <Pressable
      style={styles.button(isValid)}
      onPress={() => {handleSubmit()

        showMessage({
          message: "Your food has been created",
          type: "success",
        });
      
      }}
      >
          <Text style={styles.submitText}>Save</Text>
          </Pressable>
            </View>
            
      </>
      )}
          </Formik> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
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
  submitText: {
    color:'#fff',
    fontSize:20,
    fontWeight:'600'
},
inputField: {
  borderRadius:4,
  padding:8,
  backgroundColor:'#000',
  marginBottom:10,
  borderWidth:1
},
input: {
  padding:10,
  width: 300,
  borderBottomColor: '#fff',
  borderBottomWidth: 2,
  fontSize: 20,
  color:'#fff'
},
weight: {
  paddingTop:10,
  paddingBottom: 10,
    borderColor: '#fff',
    marginBottom: 0,
    fontSize: 15,
    marginRight:180,
    color:'#fff'
},
weightInput: {
  width: 80,
  fontSize:20,
  backgroundColor:'#4b5055',
  color:'white',
  alignSelf:'center'
}, 
})

export default CreateFoodScreen