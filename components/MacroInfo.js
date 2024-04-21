import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/base'

const MacroInfo = () => {
  return (
    <View>
     <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}> Keto</Text>
            <Text style={{color:'white', fontSize:15, fontWeight:'300'}}>25% protein, 5% carbs, 70% fat</Text>
            <Divider width={30} color="white" orientation='horizontal'/>
            </View>
            <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}> Low Carb High Fat</Text>
            <Text style={{color:'white', fontSize:15, fontWeight:'300'}}>25% protein, 15% carbs, 60% fat</Text>
            <Divider width={30} color="white" orientation='horizontal'/>
            </View>
            <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}> Low Carb Moderate Fat</Text>
            <Text style={{color:'white', fontSize:15, fontWeight:'300'}}>40% protein, 20% carbs, 40% fat</Text>
            <Divider width={30} color="white" orientation='horizontal'/>
            </View>
            <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Moderate Carb & Fat</Text>
            <Text style={{color:'white', fontSize:15, fontWeight:'300'}}>30% protein, 30% carbs, 40% fat</Text>
            <Divider width={30} color="white" orientation='horizontal'/>
            </View>
            <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Even Split</Text>
            <Text style={{color:'white', fontSize:15, fontWeight:'300'}}> 33% protein, 33% carbs, 33% fat</Text>
            <Divider width={30} color="white" orientation='horizontal'/>
            </View>
            <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Zone</Text>
            <Text style={{color:'white', fontSize:15, fontWeight:'300'}}>30% protein, 40% carbs, 30% fat</Text>
            <Divider width={30} color="white" orientation='horizontal'/>
            </View>
            <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>High Protein</Text>
            <Text style={{color:'white', fontSize:15, fontWeight:'300'}}>40% protein, 25% carbs, 35% fat</Text>
            <Divider width={30} color="white" orientation='horizontal'/>
            </View>
            <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>High Carb Low Fat</Text>
            <Text style={{color:'white', fontSize:15, fontWeight:'300'}}>15% protein, 50% carbs, 35% fat</Text>
            </View>
    </View>
  )
}

export default MacroInfo