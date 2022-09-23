import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Animated, Button, Alert } from 'react-native';

export default function Home(props) {

  const [offset] = useState( new Animated.ValueXY({x: 0, y: 90}));
  const [opacity] = useState( new Animated.Value(0));
  
  useEffect(()=> {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: false
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false
      })
    ]).start();
  }, [])
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
        <View style={styles.containerLogo}>
        <Image
        source={require('../assets/logo.png')}
        />
        </View>

        <View>
            <Text style={styles.subTitulo}> My Ford Sync (LogIn) </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder= "Email"
          autoCorrect= {false}
          onChangeText= {() => {}}
        />
        
        <TextInput
          style={styles.input}
          placeholder= "Senha"
          autoCorrect= {false}
          onChangeText= {() => {}}
        />

        <TouchableOpacity style = {styles.btnSubmit}
          onPress = { () => { props.navigation.navigate('Meu Perfil') } }>
          <Text style = {styles.submitText}>Acessar</Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress = { () => { props.navigation.navigate('CriaConta')} }>
          <Text style = {styles.register}>Não tem conta ainda ? Crie agora mesmo!</Text>
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
  containerLogo: {
    marginBottom: 120,
    justifyContent: 'center'
  },
  container: {
    alignItems:'center',
    //backgroundColor:'#191919',
    width: '90%'
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '40%',
    height: 45,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
    alignSelf: 'center'
  },
  subTitulo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    color: '#fff',
    fontSize: 25,
  },
  register: {
    color: '#fff',
    marginTop: 20,
    fontSize: 12
  }
});