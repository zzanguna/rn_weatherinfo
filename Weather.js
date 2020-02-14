import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';//배경이 그라디언트
import { Ionicons } from '@expo/vector-icons';//아이콘 설정


export default class Weather extends Component{
    render(){
        return (
            <LinearGradient colors={["#00C6FB","#005BEA"]} style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons color="white" size={144} name="ios-rainy" /> 
                    {/* 아이콘 설정 */}
                    <Text style={styles.temp}>35º</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raing like a MF</Text>
                    <Text style={styles.subtitle}>FOR MORE INFO LOOK OUTSIDE</Text>
                </View>
            </LinearGradient>       
        );ㄴ
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper : {
        flex:1,
        alignItems : "center",
        justifyContent : "center"
    },
    temp: {
        fontSize:38,
        color:"white",
        marginTop:10,
    },
    lower : {
        flex:1,
        alignItems : "flex-start",
        justifyContent : "flex-end",
        paddingLeft:25
    },
    
    title : {
        fontSize:38,
        color:"white",
        marginBottom:10,
        fontWeight : "300"

    },
    subtitle : {
        fontSize:24,
        color:"white",
        marginBottom:24,
        
    }

    
});