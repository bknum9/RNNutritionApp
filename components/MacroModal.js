import { View, Text, StyleSheet, Pressable, TouchableWithoutFeedback, TextInput, Modal, ScrollView} from 'react-native'
import React, {useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { RadioButton } from 'react-native-paper';
import CalorieModal from './CalorieModal';



const MacroModal = ({modalClose}) => {

const [calorieModalVisible, setCalorieModalVisible] = useState(false)

const calorieModalClose = () => setCalorieModalVisible(!calorieModalVisible)

const gettingStartedSchema = Yup.object().shape({
  weight: Yup.number().required('Required').positive().min(2),
  age: Yup.number().required('Required').positive('Must be positive').integer(),
  height: Yup.number().required('Required').positive().integer(),
  sex: Yup.string().required('Required'), 
  activityLevel: Yup.string().required('Required'),
})

  return (
    <ScrollView 
    contentContainerStyle={{
      flex:1, 
      justifyContent:'center', 
      alignItems:'center', 
      marginTop:80}}
      >
          <View style={styles.modalView}>

          <Formik
      initialValues={{ weight: '100',
      age: '18',
      height: '72',
      sex:'male', 
      activityLevel:'noExercise'
    }}
      onSubmit={(values) => {
        console.log(values)

        if (values.sex === 'male') {
          switch (values.activityLevel) {
            case 'noExercise': 
            console.log(parseInt((((values.weight / 2.205)*10)+ ((values.height * 2.54)*6.25) - (values.age * 5) +5) *1.2));
            break;
            case 'lightExercise':
            console.log(parseInt((((values.weight / 2.205)*10)+ ((values.height * 2.54)*6.25) - (values.age * 5) + 5) *1.375));
            break;
            case 'moderateExercise':
            console.log(parseInt((((values.weight / 2.205)*10)+ ((values.height * 2.54)*6.25) - (values.age * 5) + 5) *1.55));
            break;
            case 'hardExercise':
            console.log(parseInt((((values.weight / 2.205)*10)+ ((values.height * 2.54)*6.25) - (values.age * 5) + 5) *1.725));
            break;
            case 'extremelyHardExercise':
            console.log(parseInt((((values.weight / 2.205)*10)+ ((values.height * 2.54)*6.25) - (values.age * 5) + 5) *1.9));
          }
        }
        else {
          switch (values.activityLevel) {
            case 'noExercise': 
            console.log(parseInt((((values.weight / 2.205)*10)+ ((values.height * 2.54)*6.25) - (values.age * 5) - 161) *1.2));
            break;
            case 'lightExercise':
            console.log(parseInt((((values.weight / 2.205)*10)+ ((values.height * 2.54)*6.25) - (values.age * 5) - 161) *1.375));
            break;
            case 'moderateExercise':
            console.log(parseInt((((values.weight / 2.205)*10)+ ((values.height * 2.54)*6.25) - (values.age * 5) - 161) *1.55));
            break;
            case 'hardExercise':
            console.log(parseInt((((values.weight / 2.205)*10)+ ((values.height * 2.54)*6.25) - (values.age * 5) - 161) *1.725));
            break;
            case 'extremelyHardExercise':
            console.log(parseInt((((values.weight / 2.205)*10)+ ((values.height * 2.54)*6.25) - (values.age * 5) - 161) *1.9))
          }
        }


      }}
      validationSchema={gettingStartedSchema}
      validateOnMount={true}
      >
         {({handleChange, handleBlur, handleSubmit, values, isValid, setFieldValue, errors}) => (
      <>

            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', width:'100%', padding:0}}>
          <Text style={styles.weight}>Current Weight {errors.name}</Text>
          <View style={[styles.inputField, 
            {borderColor: 1 < values.weight.length ? '#ccc' : 'red'}
               ]}>
          <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
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
          </TouchableWithoutFeedback>
          </View>
          </View>


          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', width:'100%', padding:0}}>
          <Text style={styles.weight}>Age {errors.name}</Text>
          <View style={[styles.inputField, 
            {borderColor: 1 < values.age.length ? '#ccc' : 'red'}
               ]}>
          <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
          <TextInput 
          style={styles.weightInput} 
          placeholderTextColor='#c8cacd'
          placeholder='years'
          keyboardType='number-pad'
          autoFocus={true}
          onChangeText={handleChange('age')}
          onBlur={handleBlur('age')}
          value={values.age}
          />
          </TouchableWithoutFeedback>
          </View>
          </View>

          <Text style={{fontSize:15, color:'#fff'}}>Biological Sex</Text>
          <Text style={{color:'red', fontSize:8}}>{errors.name}</Text>
            <View style={{flexDirection:'row', justifyContent:'center',borderBottomWidth:1,
              borderColor:'#eee', width:'100%', padding:0}}>

            <RadioButton.Group onValueChange={newValue => setFieldValue('sex',newValue)} value={values.sex}>
            <View style={{flexDirection:'row', justifyContent:'flex-end', }}>
            <Text style={styles.weight}>Male</Text>
            <RadioButton.Android
            value="male" 
            color='#fff'
            uncheckedColor='#fff'
            />
            </View>
            <View style={{flexDirection:'row', justifyContent:'flex-end', }}>
            <Text style={styles.weight}>Female</Text>
            <RadioButton.Android 
            value="female" 
            color='#fff'
            uncheckedColor='#fff'

            />
            </View>
            </RadioButton.Group>
            </View>

            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', borderBottomWidth:1,
        borderColor:'#eee', width:'100%', padding:0}}>
          <Text style={styles.weight}>Height</Text>
          <View style={[styles.inputField, 
            {borderColor: 1 < values.height.length ? '#ccc' : 'red'}
               ]}>
          <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() }>
          <TextInput 
          style={styles.weightInput} 
          placeholderTextColor='#c8cacd'
          placeholder='inches'
          keyboardType='number-pad'
          autoFocus={true}
          onChangeText={handleChange('height')}
          onBlur={handleBlur('height')}
          value={values.height}
          />
          </TouchableWithoutFeedback>
          </View>
          </View>
          <Text style={{fontSize:15, color:'#fff'}}>Activity Level</Text>
          <Text style={{color:'red', fontSize:8}}>{errors.name}</Text>
          <View style={{flexDirection:'column',alignItems:'flex-start', justifyContent:'flex-start',borderBottomWidth:1,
              borderColor:'#eee', width:'100%', padding:10}}>

          <RadioButton.Group onValueChange={newValue => setFieldValue('activityLevel',newValue)} value={values.activityLevel}>
            <View style={{flexDirection:'row', justifyContent:'flex-end', }}>
            <Text style={{color:'#fff', fontSize:15, paddingVertical:7}}>Little / No Exercise</Text>
            <RadioButton.Android
            value="noExercise" 
            color='#fff'
            uncheckedColor='#fff'
            />
            </View>
            <View style={{flexDirection:'row', justifyContent:'flex-end', }}>
            <Text style={{color:'#fff', fontSize:15, paddingVertical:7}}>Light Exercise (1-3 hrs/wk)</Text>
            <RadioButton.Android 
            value="lightExercise" 
            color='#fff'
            uncheckedColor='#fff'
            />
            </View>
            <View style={{flexDirection:'row', justifyContent:'flex-end', }}>
            <Text style={{color:'#fff', fontSize:15, paddingVertical:7}}>Moderate Exercise (4-6 hours per week)</Text>
            <RadioButton.Android 
            value="moderateExercise" 
            color='#fff'
            uncheckedColor='#fff'
            />
            </View>
            <View style={{flexDirection:'row', justifyContent:'flex-end', }}>
            <Text style={{color:'#fff', fontSize:15, paddingVertical:7}}>Hard Exercise (7-9 hours per week)</Text>
            <RadioButton.Android 
            value="hardExercise" 
            color='#fff'
            uncheckedColor='#fff'
            />
            </View>
            <View style={{flexDirection:'row', justifyContent:'flex-end', }}>
            <Text style={{color:'#fff', fontSize:15, paddingVertical:7}}>Extremely Hard Exercise (10+ hours per week)</Text>
            <RadioButton.Android 
            value="extremelyHardExercise" 
            color='#fff'
            uncheckedColor='#fff'
            />
            </View>
            </RadioButton.Group>

            </View>
            <View style={{flexDirection:'row', marginBottom:20}}>
            <Pressable
              style={[styles.buttons, styles.buttonCancel]}
              onPress={modalClose}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={styles.button(isValid)}
              onPress={() => {handleSubmit(); setCalorieModalVisible(true)}}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
            </View>
            </>
      )}
          </Formik>
          <Modal
        animationType="slide"
        transparent={true}
        visible={calorieModalVisible}
        onRequestClose={() => {
          setModalVisible(!calorieModalVisible);
        }}
      >
        <CalorieModal 
        calorieModalClose={calorieModalClose}
        />
      </Modal>
          </View>
        </ScrollView>
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
        minHeight:42,
        borderRadius:4,
        margin:10,
        width:150,
        justifyContent:'center',
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
      button: (isValid) => ({
        backgroundColor: isValid ? '#0096F6': '#9ACAF7',
        width:150,
        justifyContent:'center',
        minHeight:42,
        borderRadius:4,
        margin:10,
      }),
})

export default MacroModal