import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput, TouchableOpacity, Modal} from 'react-native'
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DismissKeyboard from "../components/DismissKeyboard";
import { Formik } from 'formik'
import * as Yup from 'yup'
import GoalWeightModal from "../components/GoalWeightModal";


const WeightScreen = () => {

  const goalWt = [
    { x: '9/11/22', y: 200 },
    { x: '9/16/22', y: 210 }
  ]
  const dailyWt = [
    { x: '9/11/22', y: 200 },
    { x: '9/12/22', y: 201 },
    { x: '9/13/22', y: 202 },
    { x: '9/14/22', y: 204 },
    { x: '9/15/22', y: 206 },
    { x: '9/16/22', y: 208 },
  ]

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date)
    hideDatePicker();
    console.log(date)
  };

 const weightSchema = Yup.object().shape({
  weight: Yup.number().required().min(2, 'Must have 2 characters'),
  date: Yup.date().nullable().required(),
})

const [date, setDate] = useState(new Date())

const [modalVisible, setModalVisible] = useState(false)

const modalClose = () => setModalVisible(!modalVisible)

  return (
    <DismissKeyboard>
    <View style={styles.container}>
      <Text style={styles.chartHeader}>Weight Chart</Text>
        <VictoryChart width={400} theme={VictoryTheme.material}
        >
        <VictoryLine
    style={{
      data: { stroke: "#32CEC2" },
    }}
    data={dailyWt}
    animate={{
      duration: 2000,
      onLoad: { duration: 1000 }
    }}
  />
  <VictoryLine
    style={{
      data: { stroke: "#fff" },
    }}
    data= {goalWt}
    animate={{
      duration: 2000,
      onLoad: { duration: 1000 }
    }}
  />
  </VictoryChart>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <GoalWeightModal
        modalClose={modalClose}
        />
        </Modal>

            <View style={{marginBottom:20}}>
            <TouchableOpacity
            style={styles.submit}
            onPress={() => setModalVisible(true)}
            >
            <Text style={styles.submitText}>Add Goal Weight</Text>
            </TouchableOpacity>
            </View>

  <Formik
      initialValues={{weight: '', date:new Date()}}
      onSubmit={(values) => {
        console.log(values)
      }}
      validationSchema={weightSchema}
      validateOnMount={true}
      >
         {({handleChange, handleBlur, handleSubmit, values, isValid, setFieldValue}) => (
      <>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={styles.currentWeight}>Enter Weight</Text>
          <View style={[styles.inputField, 
            {borderColor: 1 < values.weight.length ? '#ccc' : 'red'}
               ]}>
          <TextInput 
          style={styles.weightInput} 
          placeholderTextColor='#c8cacd'
          placeholder='lbs.'
          keyboardType='number-pad'
          autoFocus={true}
          onChangeText={handleChange('weight')}
          onBlur={handleBlur('weight')}
          value={values.weight}
          />
          </View>
          </View>

          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.currentWeight}>Select Date</Text>
            <TouchableOpacity
          style={styles.date}
            onPress={showDatePicker}
            >
            <Text style={styles.dateText}>{date.getMonth() +1}/{date.getDate()}/{date.getFullYear()}</Text>
            </TouchableOpacity>

           <DateTimePickerModal
            isVisible={isDatePickerVisible}
            onChange={(date) => setFieldValue('date', date)}
            date={date}
            value={values.date}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            minimumDate={new Date(2022, 0, 1)}
            />
            </View>

          <Pressable
            style={styles.button}
            onPress={handleSubmit}>
            <Text style={{color:'#fff', fontSize:20, fontWeight:'600'}}>Submit</Text>
            </Pressable>
            </>
      )}
            </Formik>
      </View>
      </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentWeight: {
      marginHorizontal: 10,
      fontSize: 20,
      color:'white',
      fontWeight:'bold'
  },
  weightInput: {
    width: 80,
    fontSize:20,
    backgroundColor:'#4b5055',
    color:'white',
    alignSelf:'center'
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
  button: {
    backgroundColor:'#0096F6',
    alignItems:'center',
    width:200,
    justifyContent:'center',
    marginVertical:20,
    borderRadius:4,
    minHeight:42,
  },
  date: {
    padding:10,
    justifyContent:'center',
    margin:30,
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
  chartHeader:{
    fontSize:28,
    fontWeight:'600',
    color:'white'
  },
  inputField: {
    borderRadius:4,
    padding:2,
    backgroundColor:'#FAFAFA',
    marginBottom:1,
    borderWidth:1
},
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
})
export default WeightScreen