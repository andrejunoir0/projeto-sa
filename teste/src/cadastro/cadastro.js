import React from 'react';
import {View,Text, StyleSheet, TextInput,TouchableOpacity,Linking} from 'react-native';

const cadastro=()=> {
  return(
    <View style={styles.container}>
       
       <Text style={styles.text}>Tech S.A</Text>  

        <Text style={styles.text2}>Nome:</Text>  
         <TextInput style={styles.input} placeholder='Digite seu nome' />   

          <Text style={styles.text2}>Digite seu email:</Text>  
         <TextInput style={styles.input} placeholder='Digite seu email' /> 
         <Text style={styles.text2}>Digite seu telefone:</Text>
         <TextInput style={styles.input} placeholder='Digite seu telefone' />
         <Text style={styles.text2}>Digite seu CPF:</Text>
         <TextInput style={styles.input} placeholder='Digite seu CPF' />
         <Text style={styles.text2}>Digite sua senha:</Text>
          <TextInput style={styles.input} placeholder='Digite seu sua senha' />
          <Text style={styles.text2}>Confirme a senha:</Text>
          <TextInput style={styles.input} placeholder='Confirme a senha' />
          <TouchableOpacity style={styles.botao} >
             <Text style={styles.textBotao}>Cadastrar</Text>
            </TouchableOpacity>  
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:7,
    height:150,
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

export default cadastro;