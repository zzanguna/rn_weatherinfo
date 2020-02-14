import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from "./Weather"

export default class App extends Component {
  state = {
    isLoaded:false,
    errortxt:null 
  };

  componentDidMount(){//컴포넌트 라이프 사이클
    navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          isLoaded : true
        })
      },
      error => {
        this.setState({
          errortxt:error
        })
      }
    )
  }

  render(){
    const {isLoaded, errortxt} = this.state;
    return(
      <View style={styles.container}>
        <StatusBar hidden={true}/>
          {isLoaded ? (<Weather/>
          ):(
              <View style={styles.loading}>
                <Text style={styles.loadingText}>Getting the funcking weather</Text>
                {errortxt ? <Text style={styles.errorText}>{errortxt}</Text> : null}
              </View>
            ) //null이 아니라면 로딩 중
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading:{
    flex:1,
    backgroundColor:"#fdf6aa",
    justifyContent:"flex-end",
    paddingLeft:25,
  },
  errorText : {
    color:"red",
    marginBottom:40
  },
  loadingText:{
    fontSize:38,
    marginBottom:35
  }
});
