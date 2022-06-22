import React from 'react';
import {View,Text, StyleSheet, TextInput,TouchableOpacity,Linking} from 'react-native';

const App=()=> {
  return(
    <View style={styles.container}>
       
              <Text style={styles.text}>Bem-vindo ao Aplicativo!!</Text>                                                    
      
          <Text style={styles.text2}>Digite seu email:</Text>
        <View style={styles.login}>  
         <TextInput style={styles.input} placeholder='digite seu email' />         
          <TextInput style={styles.input} placeholder='digite sua senha' />
          <TouchableOpacity style={styles.botao}
           onPress={()=>{Linking.openURL('menu.js')}} >
             <Text style={styles.textBotao}>entrar</Text>
            </TouchableOpacity>
           </View>
            <Text style={styles.text2} onPress={()=>{Linking.openURL('cadastro.js')}}>
            Não tem cadastro? cadastre aqui !</Text>
            
         
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:7,
    height:140,
    backgroundColor: "#deb887",
    padding: 0,
    margin: 0,
    },
    login:{
      width: "100%",
      
    },
   text:{
    fontFamily:"italica",
    color:"white",
    fontSize:30,
    textAlign:'center',
  },
  text2:{
    fontFamily:"italica",
    color:"white",
    fontSize:16,
    textAlign:'center',
  },
  input:{
    fontFamily:"italica",
    color:"black",
    fontSize:20,
    height:50,
    margin:10,
    borderRadius:10,
    textAlign:'center',
    backgroundColor:"white",
  },
  botao:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 32,
    borderRadius: 300,
    elevation: 8,
    margin:10,
    backgroundColor: 'white',
  },
  textBotao: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

  export default App;