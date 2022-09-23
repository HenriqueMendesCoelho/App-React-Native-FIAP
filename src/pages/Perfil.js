import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Animated, Button } from 'react-native';

export default function Perfil(props) {

  const [offset] = useState( new Animated.ValueXY({x: 0, y: 90}));
  const [opacity] = useState( new Animated.Value(0));
  
  useEffect(()=> {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
      })
    ]).start();
  }, [])
  /*
  <View>
            <Text style={styles.subTitulo}> Meu Perfil</Text>
  </View>*/
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Animated.View 
      style={[
        styles.container,
        {
          opacity: opacity,
          transform: [
            { translateY: offset.y}
          ]
        }
        ]}
        >
        <TouchableOpacity style = {styles.btnSubmit}
          onPress = { () => { props.navigation.navigate('Dados Pessoais') } }>
          <Text style = {styles.submitText}> Dados Pessoais</Text>

        </TouchableOpacity>

        <TouchableOpacity style = {styles.btnSubmit}
          onPress = { () => { props.navigation.navigate('Contatos') } }>
          <Text style = {styles.submitText}> Dados de Contato</Text>

        </TouchableOpacity>
            
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#0066cc'
  },
  container: {
    alignItems:'center',
    marginBottom: 50,
    //backgroundColor:'#191919',
    width: '90%'
  },
  btnSubmit: {
    alignItems:'center',
    backgroundColor: '#021E73',
    width: '105%',
    marginBottom: 60,
    color: '#222',
    fontSize: 20,
    borderRadius: 10,
    padding: 30,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
    
  },
  subTitulo: {
    justifyContent: 'flex-start',
    marginBottom: 80,
    color: '#fff',
    fontSize: 50,
    fontWeight: "bold"
  },
});