import { View, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    TouchableWithoutFeedback, 
    StyleSheet,
    Pressable, 
    Alert
  } from 'react-native'
  import React, {useState} from 'react'
  import DateTimePickerModal from "react-native-modal-datetime-picker";
  import { Formik } from 'formik'
  import * as Yup from 'yup'
  import { RadioButton } from 'react-native-paper';
  
  
  const CopyModal = ({modalClose}) => {
  
const [startDate, setStartDate] = useState(new Date())
  
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
  
  
    const goalWeightSchema = Yup.object().shape({
      copyDate: Yup.date().nullable().required('Date is required'),
      meal: Yup.string().required('Required'),
    })
  
    return (
      <View style={styles.centeredView}>
      <View style={styles.modalView}>
  
         <Formik
        initialValues={{ meal: '',
        copyDate: new Date(),
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
          <Text style={{color:'#fff'}}>Select Date:</Text>
          <TouchableOpacity
            style={styles.date}
              onPress={showDatePicker}
              >
              <Text style={styles.dateText}>{startDate.getMonth() +1}/{startDate.getDate()}/{startDate.getFullYear()}</Text>
              </TouchableOpacity>
  
             <DateTimePickerModal
              isVisible={isDatePickerVisible}
              onChange={(e) => setFieldValue('copyDate', e)}
              date={startDate}
              value={values.copyDate}
              onConfirm={handleConfirmStartDate}
              onCancel={hideDatePicker}
              minimumDate={new Date()}
              />
        </View>

        <RadioButton.Group onValueChange={newValue => setFieldValue('meal',newValue)} value={values.meal}>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
            <Text style={{color:'#fff', fontSize:30, paddingVertical:7}}>Breakfast</Text>
            <RadioButton.Android
            value="breakfast" 
            color='#fff'
            uncheckedColor='#fff'
            />
            </View>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
            <Text style={{color:'#fff', fontSize:30, paddingVertical:7}}>Lunch</Text>
            <RadioButton.Android 
            value="lunch" 
            color='#fff'
            uncheckedColor='#fff'
            />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center' }}>
            <Text style={{color:'#fff', fontSize:30, paddingVertical:7}}>Dinner</Text>
            <RadioButton.Android 
            value="dinner" 
            color='#fff'
            uncheckedColor='#fff'
            />
            </View>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
            <Text style={{color:'#fff', fontSize:30, paddingVertical:7}}>Snack</Text>
            <RadioButton.Android 
            value="snack" 
            color='#fff'
            uncheckedColor='#fff'
            />
            </View>
            </RadioButton.Group>
  
  
            <View style={{flexDirection:'row', marginBottom:20}}>
              <Pressable
                style={[styles.buttons, styles.buttonCancel]}
                onPress={modalClose}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.buttons, styles.buttonSubmit]}
                onPress={() => {handleSubmit()
                  showMessage({
                    message: "Your meal has been copied",
                    type: "success",
                  });
                  
                
                }}
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
  })
  
  export default CopyModal