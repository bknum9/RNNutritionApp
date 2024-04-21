import { View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native'
import React, {useState}from 'react'
import FoodMacroModal from './FoodMacroModal';


const ListItem = ({item}) => {

const [modalVisible, setModalVisible] = useState(false)

const modalClose = () => setModalVisible(!modalVisible)

  return (

    <View>

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <FoodMacroModal
        modalClose={modalClose}
        item={item}
        />
        </Modal>

    <TouchableOpacity 
    style={styles.listItem} onPress={() => setModalVisible(true)}>
      <View>
        <Text style={{fontSize:16}}>{item.text}</Text>
        <View style={styles.listItemView}>
        <Text style={{fontSize:12}}>amt: {item.amt}</Text>
        <Text style={{fontSize:12}}>kcal: {item.cals}</Text>
        <Text style={{fontSize:12}}>p: {item.p}</Text>
        <Text style={{fontSize:12}}>c: {item.c}</Text>
        <Text style={{fontSize:12}}>f: {item.f}</Text>
        </View>
        </View>
    </TouchableOpacity>

    </View>
      
  )
}

const styles = StyleSheet.create({
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

export default ListItem