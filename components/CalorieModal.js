import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CalorieModal = ({calorieModalClose}) => {
  return (
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <View style={styles.calorieCard}>
      <Text style={styles.cardTitle}>Maintain Weight</Text>
      <Text style={styles.cardCalories}>2000 Calories/Day</Text>
            </View>
            <View style={styles.calorieCard}>
      <Text style={styles.cardTitle}>Mild Weight Loss</Text>
      <Text style={styles.cardCalories}>1750 Calories/Day </Text>
      <Text style={styles.cardWeek}>(0.5 lb/week)</Text>
            </View>
            <View style={styles.calorieCard}>
      <Text style={styles.cardTitle}>Weight Loss</Text>
      <Text style={styles.cardCalories}>1500 Calories/Day</Text>
      <Text style={styles.cardWeek}>(1 lb/week)</Text>
            </View>
            <View style={styles.calorieCard}>
      <Text style={styles.cardTitle}>Mild Weight Gain</Text>
      <Text style={styles.cardCalories}>2250 Calories/Day</Text>
      <Text style={styles.cardWeek}>(0.5 lb/week)</Text>
            </View>
            <View style={styles.calorieCard}>
      <Text style={styles.cardTitle}>Weight Gain</Text>
      <Text style={styles.cardCalories}>2500 Calories/Day</Text>
      <Text style={styles.cardWeek}>(1 lb/week)</Text>
            </View>

      <View style={{marginBottom:20}}>
            <Pressable
              style={[styles.buttonBack, styles.buttons]}
              onPress={calorieModalClose}
            >
              <Text style={styles.buttonText}>Ok</Text>
            </Pressable>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        margin: 20,
        backgroundColor: "#abadaf",
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
      buttonBack: {
        backgroundColor: "#f71805",
      },
      buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      calorieCard: {
        marginVertical:10,
         borderColor:'#fff', 
         borderWidth:2, 
         padding:10, 
         borderRadius:10, 
         alignItems:'center', 
         backgroundColor:'#000',
         width:200
      },
      cardTitle: {
        color:'#fff', 
        fontSize:20, 
        marginVertical:5, 
        fontWeight:'800'
      },
      cardCalories: {
        color:'#fff', 
        fontSize:15, 
        marginVertical:5, 
        fontWeight:'500'
      },
      cardWeek: {
        color:'#fff', 
        fontSize:12, 
        marginVertical:5, 
        fontWeight:'400'
      }
})

export default CalorieModal