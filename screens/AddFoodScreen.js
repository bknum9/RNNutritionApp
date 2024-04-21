import { View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput, 
  FlatList, 
  VirtualizedList
} from 'react-native'
import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { color } from '@rneui/base';

const AddFoodScreen = ({navigation}) => {

  const [text, setText] = useState('');

  const onChange = (text) => setText(text)

  const [foods, setFoods] = useState( { "foods": {
    "food":[
      { "food_description": "Per 100g - Calories: 147kcal | Fat: 9.94g | Carbs: 0.77g | Protein: 12.58g",
        "food_name": "Egg",
        "food_type": "Generic",}
    ]
  }
    }
      )


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjVGQUQ4RTE5MjMwOURFRUJCNzBCMzU5M0E2MDU3OUFEMUM5NjgzNDkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJYNjJPR1NNSjN1dTNDeldUcGdWNXJSeVdnMGsifQ.eyJuYmYiOjE2NzA0MzAyOTQsImV4cCI6MTY3MDUxNjY5NCwiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiJmZWIzZmZiZGMwOGI0NmVjYWJhNzBiMDJjMWNlMzc0NCIsInNjb3BlIjpbImJhc2ljIl19.I_qZRxAAb8EN3RWo07s589wIckgGRn6F806XWkemDIwI8tiVddNoMHBNZNM5_3BtbfEBgW816-c-jIZe4YIgHAPY2Q3NS6BMlnyCx6rT2OoAM-dkImgaYhmATxpP2oRktGzQeumk3KnG2lruNrAWSX5Lqs1XTW13-FgChKQckwrogZtdPTJLAYXssgf3Ztt_pzEjKOB2e_5zMczTEuVqbxeJ-DrWpUDJmhe1-45YzWJHfqmhgtM7ahQVFVVqCjGJf32M7dGup2J2orH4nsTFeAKRDmnaS1Gkq8YVktyeIQGyxJSimAHvDHOUFNJD4EBlT2_CCBmBxyoIYE4FNzyrtA");
myHeaders.append("Cookie", "AWSALB=0dchEpzA3PbdpBzbCownT3KAqVUqjyj3ZCnBGDn1YG8Q72Q6VHQLMOZRlXM9gQz1vHmqZHBms9wPfwBrXxxHBxbritz/Z15pK200MfmlcPhPwfbtTMrXMDOrAnKa; AWSALBCORS=0dchEpzA3PbdpBzbCownT3KAqVUqjyj3ZCnBGDn1YG8Q72Q6VHQLMOZRlXM9gQz1vHmqZHBms9wPfwBrXxxHBxbritz/Z15pK200MfmlcPhPwfbtTMrXMDOrAnKa");

var urlencoded = new URLSearchParams();

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

const foodSearch = () => {
fetch(`https://platform.fatsecret.com/rest/server.api?method=foods.search&search_expression=${text}&format=json&max_results=50`, requestOptions)
  .then(response => response.json())
  .then(result => setFoods(result))
  .catch(error => console.log('error', error));
}

console.log(foods)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '720c0520edmsh4e60b3ae75c8c5ep132d8djsnf3c1fd7cc29a',
		'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com'
	}
};
  
  

  return (
    <View style={styles.container}>
      <View>
      <TextInput 
      placeholder='Search Food...'
      placeholderTextColor='#c8cacd'
      style={styles.input}
      onChangeText={onChange}
      />

      <TouchableOpacity style={styles.addBtn} onPress={foodSearch}>
        <Text style={styles.btnText}>Search
          </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BarCodeScan')}>
      <Text style={styles.btnText}><FontAwesome 
            name='barcode'
            size={20}
            /> Barcode Scanner</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('CreateFoodScreen')}>
        <Text style={styles.btnText}>
            <FontAwesome 
            name='plus'
            size={20}
            /> Create Food
            </Text>
      </TouchableOpacity>
    </View>

    <Text style={{fontSize:25, fontWeight:'700', color:'#fff', alignSelf:'center'}}>Foods</Text>

    <FlatList 
      data={foods.foods.food}
      renderItem={({item}) => 
      <TouchableOpacity 
    style={styles.listItem}>
      <View>
        <Text style={{fontSize:11}}>{item.food_name}</Text>
        <Text style={{fontSize:10}}>{item.brand_name}</Text>
        <View style={styles.listItemView}>
        <Text style={{fontSize:10}}>{item.food_description}</Text>
        </View>
        </View>
    </TouchableOpacity> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#000',
    paddingTop: 50,
    paddingHorizontal:12,
},
  input: {
      height:60,
      borderBottomWidth: 1,
      borderBottomColor:'#c8cacd',
      padding:8,
      fontSize:20,
      color:'#c8cacd'
  },
  btn: {
      backgroundColor:'#c2bad8',
      padding:9,
      margin:10,
  },
  btnText: {
      color:'black',
      fontSize:20,
      textAlign:'center',
  },
  addBtn: {
    backgroundColor:'#cf664d',
    padding:9,
    margin:10,
},
icon: {
  paddingRight:20
},
listItem:{
  padding:10,
  backgroundColor: '#f8f8f8',
  borderBottomWidth:1,
  borderColor:'#eee'
},
listItemView: {
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
},

})

export default AddFoodScreen