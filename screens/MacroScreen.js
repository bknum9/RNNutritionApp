import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Pressable, 
  Modal, 
  Alert, 
  ScrollView, 
  TouchableWithoutFeedback, 
  Keyboard,
KeyboardAvoidingView} from 'react-native'
//import Slider from '@react-native-community/slider';
import { Slider, Overlay, Divider} from "@rneui/base";
import { Formik } from 'formik'
import * as Yup from 'yup'
import MacroModal from "../components/MacroModal";
import MacroInfo from "../components/MacroInfo";
import { showMessage, hideMessage } from "react-native-flash-message";


const MacroScreen = () => {

const [proteinRange, setProteinRange ] = useState('.3')
const [carbRange, setCarbRange ] = useState('.4')
const [fatRange, setFatRange ] = useState('.3')

const o = parseFloat(fatRange) + parseFloat(carbRange)
const r = parseFloat(proteinRange) + parseFloat(carbRange)
const s = parseFloat(proteinRange) + parseFloat(fatRange)

const total = 1 - o
const total1 = 1 - s
const total2 = 1 - r

const [modalVisible, setModalVisible] = useState(false)

const modalClose = () => setModalVisible(!modalVisible)

const [visible, setVisible] = useState(false);

const toggleOverlay = () => {
  setVisible(!visible);
};

const macroSchema = Yup.object().shape({
  calories:Yup.number().required().min(1200).max(10000),
  proteinAmount: Yup.number().required(),
  carbAmount: Yup.number().required(),
  fatAmount: Yup.number().required(),
})

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="light"/>

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <MacroModal 
        modalClose={modalClose}
        />
      </Modal>

            <View style={{marginTop:50}}>
            <TouchableOpacity
            style={styles.submit}
            onPress={() => setModalVisible(true)}
            >
            <Text style={styles.submitText}>Getting Started</Text>
            </TouchableOpacity>
            </View>

    <Formik
      initialValues={{ calories:'2000',
      proteinAmount: '.3',
      carbAmount: '.4',
      fatAmount: '.3'
    }}
      onSubmit={(values) => {
        console.log(values)
      }}
      validationSchema={macroSchema}
      validateOnMount={true}
      >
         {({handleChange, handleBlur, handleSubmit, values, isValid, setFieldValue}) => (
      <>
      <Text style={{fontSize:30,fontWeight:'600',marginVertical:10, color:'#fff'}}>Adjust Goals</Text>
      
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', borderTopWidth:1, width:'100%', padding:10}}>
          <Text style={styles.weight}>Calories</Text>
          <View style={[styles.inputField, 
            {borderColor: 3 < values.calories.length ? '#ccc' : 'red'}
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

          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center', borderBottomWidth:1,
        borderColor:'#eee', width:'100%', padding:10}}>
          <TouchableOpacity 
          style={{ padding:10,
            margin:5,
            width: 250,
            borderColor: '#32CEC2',
            borderWidth: 2,
            borderRadius:10,
            alignItems: 'center',
            backgroundColor:'#32CEC2'}}
           onPress={toggleOverlay}>
          <Text style={styles.submitText}>Macro % Info</Text>
          </TouchableOpacity>
          <Overlay isVisible={visible} 
          onBackdropPress={toggleOverlay}>
        <MacroInfo />
          </Overlay>
          </View>

          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between',borderBottomWidth:1,
        borderColor:'#eee', width:'100%', padding:10}}>
            <Text style={{color:'#fff'}}>Protein Amount</Text>
            <Slider 
            style={styles.macroSlider} 
            onValueChange={value => { setFieldValue('proteinAmount', value.toFixed(2))
            setProteinRange(value.toFixed(2))
                 }}
                onSlidingComplete={value => { setFieldValue('proteinAmount', value.toFixed(2))
               setProteinRange(value.toFixed(2))
              }}
            value={values.proteinAmount}
            minimumValue={0}
            maximumValue={total}
            step={0.01}
            thumbTintColor="#32CEC2"
            minimumTrackTintColor='#32CEC2'
            maximumTrackTintColor="#fff"
            />
            </View>

            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', width:'100%', padding:10}}>
            <Text style={{color:'#fff'}}>Carb Amount</Text>
            <Slider 
            style={styles.macroSlider} 
            onValueChange={value => { setFieldValue('carbAmount', value.toFixed(2))
            setCarbRange(value.toFixed(2))
                 }}
                onSlidingComplete={value => { setFieldValue('carbAmount', value.toFixed(2))
               setCarbRange(value.toFixed(2))
              }}
            value={values.carbAmount}
            minimumValue={0}
            maximumValue={total1}
            step={0.01}
            thumbTintColor="#32CEC2"
            minimumTrackTintColor='#32CEC2'
            maximumTrackTintColor="#fff"
            />
            </View>
            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', width:'100%', padding:10}}>
            <Text style={{color:'#fff'}}>Fat Amount</Text>
            <Slider 
            style={styles.macroSlider} 
            minimumValue={0}
            maximumValue={total2}
            minimumTrackTintColor='#32CEC2'
            maximumTrackTintColor="#fff"
            thumbTintColor="#32CEC2"
            step={0.01}
            onValueChange={value => {
              setFieldValue('fatAmount', value.toFixed(2))
              setFatRange((value.toFixed(2)))
            }}
            onSlidingComplete={value => {
              setFieldValue('fatAmount', value.toFixed(2))
              setFatRange((value.toFixed(2)))
            }}
            value={values.fatAmount}
            />
            </View>
            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', width:'100%'}}>
              <Text style={styles.macroOutput}>Protein</Text>
              <Text style={styles.macroOutput}>{parseInt(proteinRange * 100)}%</Text>
              <Text style={styles.macroOutput}>{parseInt((values.calories * values.proteinAmount)/4)} g</Text>
              </View>

              <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
                borderColor:'#eee',width:'100%'}}>
              <Text style={styles.macroOutput}>Carb</Text>
              <Text style={styles.macroOutput}>{parseInt(carbRange * 100)}%</Text>
              <Text style={styles.macroOutput}>{parseInt((values.calories * values.carbAmount)/4)} g</Text>
              </View>

              <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', width:'100%'}}>
              <Text style={styles.macroOutput}>Fat</Text>
              <Text style={styles.macroOutput}>{parseInt(fatRange * 100)}%</Text>
              <Text style={styles.macroOutput}>{parseInt((values.calories * values.fatAmount)/9)} g</Text>
              </View>

              <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', width:'100%'}}>
              <Text style={styles.macroOutput}>Calories</Text>
              <Text style={styles.macroOutput}>{parseInt(proteinRange * 100) + parseInt(carbRange * 100) + parseInt(fatRange * 100)}%</Text>
              <Text style={styles.macroOutput}>{values.calories} kcal</Text>
              </View>

            <View style={{marginBottom:50}}>
            <Pressable
      style={styles.button(isValid)}
      onPress={() => {handleSubmit()

        showMessage({
          message: "Your macros have been saved",
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
weight: {
  paddingTop:10,
  paddingBottom: 10,
    borderColor: '#fff',
    marginBottom: 0,
    fontSize: 15,
    marginRight:180,
    color:'#fff'
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
submit: {
  padding:15,
  margin:10,
  width: 200,
  borderColor: '#32CEC2',
  borderWidth: 2,
  borderRadius:10,
  alignItems: 'center',
  backgroundColor:'#32CEC2'
  },
macroSlider: {
    width: 270,
    height: 40,
    color:'#fff'
},
modalOpen: {
  alignSelf:"center"
},
modalClose: {
  alignSelf:"flex-end",
  flex:0,
  padding:20,
  marginTop:20,
  justifyContent:'center'
},
addMeals: {
  flexDirection:'row',
  padding:5,
  margin: 15,
  width: 300,
  height: 50,
  borderColor: '#fff',
  borderWidth: 3,
  borderRadius:5,
  alignItems: 'center',
  backgroundColor:'#32CEC2',
  elevation:3,
  shadowOffset:{width:1, height:1},
  shadowColor:'#333',
  shadowOpacity: 0.3,
  shadowRadius:2,
  },
addMealText: {
  color:'#fff',
  fontSize:20,
  fontWeight:'bold',
  marginTop: 10,
},
dateInput: {
  paddingHorizontal: 70,
  marginVertical:10,
  color:'#fff'
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
buttonClose: {
  backgroundColor: "#2196F3",
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
},
date: {
  padding:10,
  justifyContent:'center',
  margin:10,
  width: 200,
  borderColor: '#fff',
  borderWidth: 2,
  borderRadius:5,
  alignItems: 'center',
  backgroundColor:'#4b5055'
  },
dateText: {
  color:'white',
  fontSize:20,
  fontWeight:'bold'
},
inputField: {
  borderRadius:4,
  padding:2,
  backgroundColor:'#FAFAFA',
  marginBottom:1,
  borderWidth:1
},
weightInput: {
  width: 80,
  fontSize:20,
  backgroundColor:'#000',
  color:'white',
}, 
macroOutput: {
  color:'#fff', 
  fontSize:20, 
  fontWeight:'600',
  marginVertical:10
}
})

export default MacroScreen