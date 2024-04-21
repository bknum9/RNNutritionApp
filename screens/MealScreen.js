import { SafeAreaView, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Text, 
  View, 
  Modal} from 'react-native';
import React, { useState } from 'react';
import ListItem from '../components/ListItem';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { StatusBar } from 'expo-status-bar';
import { Divider, LinearProgress} from '@rneui/base';
import CopyModal from '../components/CopyModal';
import { showMessage, hideMessage } from "react-native-flash-message";


const MealScreen = ({navigation}) => {

      const data = [{
        id:101,
        mealName: 'Breakfast',
        date:'9/25/22',
        meal: [ {id:1, text:'milk', amt: 124, cals: 111, p: 1, c: 2, f: 3},
        {id:2, text:'eggs', amt: 144, cals: 121, p: 3, c: 24, f: 43},
        {id:3, text:'cereal', amt: 164, cals: 145, p: 41, c: 52, f: 33},
        {id:4, text:'bread', amt: 114, cals: 314, p: 31, c: 22, f: 31},]
      },
    { id:102,
        mealName: 'Lunch',
        date:'9/25/22',
        meal: [ {id:1, text:'midasdlk', amt: 124, cals: 111, p: 1, c: 2, f: 3},
        {id:2, text:'edasfdggs', amt: 144, cals: 121, p: 3, c: 24, f: 43},
        {id:3, text:'cdafdareal', amt: 164, cals: 145, p: 41, c: 52, f: 33},
        {id:4, text:'brdafadead', amt: 714, cals: 314, p: 31, c: 22, f: 31},]},
        { id:105,
            mealName: 'Dinner',
            date:'9/25/22',
            meal: []},
            { id:104,
                mealName: 'Snack',
                date:'9/25/22',
                meal: [{id:1, text:'mida', amt: 124, cals: 111, p: 1, c: 2, f: 3},
                {id:2, text:'dada', amt: 144, cals: 121, p: 3, c: 24, f: 43},
                {id:3, text:'fdabad', amt: 164, cals: 145, p: 41, c: 52, f: 33},
                {id:4, text:'feace', amt: 114, cals: 314, p: 31, c: 22, f: 31},]}
    
    ]

    const proteinConsumed = [40]  
    const proteinNeeds = [200]
    const proteinPercent = parseFloat(proteinConsumed / proteinNeeds)
    
    const carbConsumed = [90]  
    const carbNeeds = [300]
    const carbPercent = parseFloat(carbConsumed / carbNeeds)
   
    const fatConsumed = [90]
    const fatNeeds = [100] 
    const fatPercent = parseFloat(fatConsumed / fatNeeds)
    
    const caloriesConsumed = [(proteinConsumed*4)+(carbConsumed*4)+(fatConsumed*9)]  
    const calorieNeeds = [(proteinNeeds*4)+(carbNeeds*4)+(fatNeeds*9)]
    const caloriePercent = parseFloat(caloriesConsumed / calorieNeeds)

    
      const [date, setDate] = useState(new Date())

      const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

      const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        hideDatePicker();
        setDate(date)
      };

      const [modalVisible, setModalVisible] = useState(false)

      const modalClose = () => setModalVisible(!modalVisible)

      return (
      
      <SafeAreaView style={styles.container}>
        <StatusBar style='light'/>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.date} onPress={showDatePicker}>
            <Text style={styles.dateText}> {date.getMonth() +1}/{date.getDate()}/{date.getFullYear()}</Text>
            </TouchableOpacity>

           <DateTimePickerModal
            isVisible={isDatePickerVisible}  
            date={date}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            minimumDate={new Date(2022, 0, 1)}
            />
            </View>
      <Divider width={2} color="#acabaa" orientation='horizontal'/>

      <View style={{backgroundColor:'#000', alignItems:'center', marginVertical:10}}>
      <Text style={styles.macroHeader}>Daily Food Intake </Text>
        
        <Text style={styles.macroList}>Protein</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={styles.macroList}>{proteinConsumed}g </Text>
        <LinearProgress  
        style={{ marginVertical: 10, width:250}}
        value={proteinPercent}
        variant="determinate"
        trackColor='#fff'
        color='#e5221a'/>
        <Text style={styles.macroList}> {proteinNeeds}g</Text>
        </View>

        <Text style={styles.macroList}>Carbohydrates</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={styles.macroList}>{carbConsumed}g </Text>
        <LinearProgress  
        style={{ marginVertical: 10, width:250}}
        value={carbPercent}
        variant="determinate"
        trackColor='#fff'
        color='#1aec0e'/>
        <Text style={styles.macroList}> {carbNeeds}g</Text>
        </View>

        <Text style={styles.macroList}>Fat</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={styles.macroList}>{fatConsumed}g </Text>
        <LinearProgress  
        style={{ marginVertical: 10, width:250}}
        value={fatPercent}
        variant="determinate"
        trackColor='#fff'
        color='#f9a90a'/>
        <Text style={styles.macroList}> {fatNeeds}g</Text>
        </View>

        <Text style={styles.macroList}>Calories</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={styles.macroList}>{caloriesConsumed}kcal </Text>
        <LinearProgress  
        style={{ marginVertical: 10, width:250}}
        value={caloriePercent}
        variant="determinate"
        trackColor='#fff'
        color='#1f0eec'/>
        <Text style={styles.macroList}> {calorieNeeds}kcal</Text>
        </View>
        </View>
      <Divider width={2} color="#acabaa" orientation='horizontal'/>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CopyModal
        modalClose={modalClose}
        />
        </Modal>

      <FlatList 
      data={data}
      renderItem={({item}) => 
        <View>
      <View style={styles.header}>
      <Text style={styles.headerText}>{item.mealName}</Text>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity>
      <FontAwesome 
      name='copy'
      onPress={() => setModalVisible(true)}
      size={20}
      style={{color:'#fff', marginRight:10}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AddFoodScreen')}>
      <FontAwesome 
      name='plus'
      size={25}
      style={{color:'#fff', marginLeft:5}}/>
      </TouchableOpacity>
      </View>
      </View>
      <FlatList 
      data={item.meal}
      renderItem={({item}) => 
      <ListItem item={item}
      />}
      />
        <Divider width={2} color="#acabaa" orientation='horizontal'/>
    </View>
    }
      />
      
      </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor: '#000000',
        alignContent:'center',
        justifyContent:'center'
      },
      header:{
        padding:15,
        height:50,
        backgroundColor:'#000000',
        width:'100%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
      },
      headerText: {
        color:'#fff',
        fontSize:18,
        fontWeight:'800'
      },
      macroHeader: {
        color:'#fff',
        fontSize:28,
        fontWeight:'600',
        marginVertical:5
    },
      macroList: {
        color:'#fff',
        fontSize:18,
        fontWeight:'300',
        marginVertical:1
    },
    date: {
      padding:10,
      margin:10,
      width: 300,
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
    });

export default MealScreen