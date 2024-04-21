import { View, 
  Text, 
  TouchableOpacity, 
  TextInput, 
  TouchableWithoutFeedback, 
  StyleSheet,
  Pressable
} from 'react-native'
import React, {useState} from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Formik } from 'formik'
import * as Yup from 'yup'


const GoalWeightModal = ({modalClose}) => {

    const [startDate, setStartDate] = useState(new Date())
const [endDate, setEndDate] = useState(new Date())


const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmStartDate = (e) => {
    setStartDate(e)
    hideDatePicker();
  };

  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const handleConfirmEndDate = (date) => {
    setEndDate(date)
    hideEndDatePicker();
  };

  const goalWeightSchema = Yup.object().shape({
    startWeight: Yup.number().required('Required').positive().min(2),
    goalWeight: Yup.number().required('Required').positive().min(2),
    startDate: Yup.date().nullable().required('Date is required'),
    endDate: Yup.date().nullable().required('Date is required'),
  })

  return (
    <View style={styles.centeredView}>
    <View style={styles.modalView}>

       <Formik
      initialValues={{ startWeight: '',
      goalWeight: '',
      startDate: new Date(),
      endDate: new Date(),
    }}
      onSubmit={(values) => {
        console.log(values)
      }}
      validationSchema={goalWeightSchema}
      validateOnMount={true}
      >
         {({handleChange, handleBlur, handleSubmit, values, isValid, setFieldValue, errors}) => (
      <>
     <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', width:'100%'}}>
        <Text style={{color:'#fff'}}>Start Date:</Text>
        <TouchableOpacity
          style={styles.date}
            onPress={showDatePicker}
            >
            <Text style={styles.dateText}>{startDate.getMonth() +1}/{startDate.getDate()}/{startDate.getFullYear()}</Text>
            </TouchableOpacity>

           <DateTimePickerModal
            isVisible={isDatePickerVisible}
            onChange={(e) => setFieldValue('startDate', e)}
            date={startDate}
            value={values.startDate}
            onConfirm={handleConfirmStartDate}
            onCancel={hideDatePicker}
            minimumDate={new Date()}
            />
      </View>

      <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', width:'100%'}}>
        <Text style={{color:'#fff'}}>End Date:</Text>
        <TouchableOpacity
          style={styles.date}
            onPress={showEndDatePicker}
            >
            <Text style={styles.dateText}>{endDate.getMonth() +1}/{endDate.getDate()}/{endDate.getFullYear()}</Text>
            </TouchableOpacity>

           <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            onChange={(date) => setFieldValue('endDate', date)}
            date={endDate}
            value={values.endDate}
            onConfirm={handleConfirmEndDate}
            onCancel={hideEndDatePicker}
            minimumDate={startDate}
            />
        </View>

            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', width:'100%', padding:0}}>
          <Text style={styles.weight}>Start Weight {errors.name}</Text>
          <View style={[styles.inputField, 
            {borderColor: 1 < values.startWeight.length ? '#ccc' : 'red'}
               ]}>
          <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
          <TextInput 
          style={styles.weightInput} 
          placeholderTextColor='#c8cacd'
          placeholder='lbs.'
          keyboardType='number-pad'
          autoFocus={true}
          onChangeText={handleChange('startWeight')}
          onBlur={handleBlur('startWeight')}
          value={values.startWeight}
          />
          </TouchableWithoutFeedback>
          </View>
          </View>

          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', width:'100%', padding:0}}>
          <Text style={styles.weight}>Goal Weight {errors.name}</Text>
          <View style={[styles.inputField, 
            {borderColor: 1 < values.goalWeight.length ? '#ccc' : 'red'}
               ]}>
          <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
          <TextInput 
          style={styles.weightInput} 
          placeholderTextColor='#c8cacd'
          placeholder='lbs.'
          keyboardType='number-pad'
          autoFocus={true}
          onChangeText={handleChange('goalWeight')}
          onBlur={handleBlur('goalWeight')}
          value={values.goalWeight}
          />
          </TouchableWithoutFeedback>
          </View>
          </View>

          <View style={{flexDirection:'row', marginBottom:20}}>
            <Pressable
              style={[styles.buttons, styles.buttonCancel]}
              onPress={modalClose}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.buttons, styles.buttonSubmit]}
              onPress={() => {handleSubmit()}}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
            </View>




          </>
          )}
              </Formik>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "#4c4c4d",
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
    buttons: {
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal:30,
      elevation: 2, 
      margin:10
    },
    buttonCancel: {
      backgroundColor: "#f71805",
    },
    buttonSubmit: {
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
      backgroundColor:'#4b5055',
      color:'white',
      alignSelf:'center'
    }, 
    weight: {
      paddingVertical:7,
        fontSize: 15,
        marginRight:180,
        color:'#fff'
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
      backgroundColor:'#000'
      },
    dateText: {
      color:'white',
      fontSize:20,
      fontWeight:'bold'
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

export default GoalWeightModal