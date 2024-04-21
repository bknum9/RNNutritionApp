import { View, 
    Text, 
    TextInput, 
    TouchableWithoutFeedback, 
    StyleSheet,
    Pressable
  } from 'react-native'
  import React, {useState} from 'react'
  import { Formik } from 'formik'
  import * as Yup from 'yup'
  import { Divider } from '@rneui/base'
  import DropDownPicker from 'react-native-dropdown-picker';
  
  
  const FoodMacro = ({modalClose, item}) => {
  
    const foodMacroSchema = Yup.object().shape({
      amount: Yup.number().required('Required').positive(),
    })

    const [open, setOpen] = useState(false);
  const [value, setValue] = useState('grams');
  const [items, setItems] = useState([
    {label: 'g', value: 'grams'},
    {label: 'fl oz', value: 'fluid ounces'}
  ]);

  
    return (
      <View style={styles.centeredView}>
      <View style={styles.modalView}>
  
         <Formik
        initialValues={{ amount: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={foodMacroSchema}
        validateOnMount={true}
        >
           {({handleChange, handleBlur, handleSubmit, values, isValid, setFieldValue, errors}) => (
        <>
        <View>
        <Text style={styles.weight}>{item.text}</Text>
        <Text style={{color:'#fff', fontSize:15, paddingVertical:5}}>brand</Text>
        </View>
        <Divider width={10} color="#fff" orientation='vertical'/>

         <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
            <Text style={styles.weight}>Amount {errors.name}</Text>
            <View style={[styles.inputField, 
              {borderColor: 0 < values.amount.length ? '#ccc' : 'red'}
                 ]}>
            <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <TextInput 
            style={styles.weightInput} 
            placeholderTextColor='#c8cacd'
            placeholder= 'amount'
            keyboardType='number-pad'
            autoFocus={true}
            onChangeText={handleChange('amount')}
            onBlur={handleBlur('amount')}
            value={values.amount}
            />
            </TouchableWithoutFeedback>
            </View>
            <DropDownPicker
            style={{width:100}}
            containerStyle={{width:100}}
           open={open}
            value={value}
           items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            theme='DARK'
              />   
              </View>       
           

            <Divider width={89} color="#fff" orientation='vertical'/>
            <View style={{ flexDirection:'row', justifyContent:'space-between',
        alignItems:'center'}}>

            <View>
            <Text style={styles.weight}>Calories</Text>
            <Text style={styles.weight}>{item.cals}</Text>
            </View>

            <View>
            <Text style={styles.weight}>Protein</Text>
            <Text style={styles.weight}>{item.p} g</Text>
            </View>

            <View>
            <Text style={styles.weight}>Carbs</Text>
            <Text style={styles.weight}>{item.c}g</Text>
            </View>

            <View>
            <Text style={styles.weight}>Fat</Text>
            <Text style={styles.weight}>{item.f} g</Text>
            </View>
            </View>
  
            <View style={{flexDirection:'row', justifyContent:'space-evenly',alignItems:'center'}}>
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
        justifyContent: 'center',
        alignItems: "center",    
      },
      modalView: {
        backgroundColor: "#4b5055",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        width:400,
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
      weight: {
        paddingVertical:5,
          fontSize: 20,
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
      }, 
  })
  
  export default FoodMacro