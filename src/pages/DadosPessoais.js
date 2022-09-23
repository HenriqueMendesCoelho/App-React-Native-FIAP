import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Animated, Button, Alert } from 'react-native';

export default function DadosPessoais(props) {

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
        <View>
            <Text style={styles.subTitulo}> Nome</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder= "Nome"
          autoCorrect= {false}
          onChangeText= {() => {}}
          defaultValue= "Henrique Mendes Coelho Rodrigues"
        />
        <View>
            <Text style={styles.subTitulo}> CPF</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder= "CPF"
          autoCorrect= {false}
          onChangeText= {() => {}}
          defaultValue= "758.569.378-80"
        />
        <View>
            <Text style={styles.subTitulo}> CNH</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder= "CNH"
          autoCorrect= {false}
          onChangeText= {() => {}}
          defaultValue= "97395680431"
        />

        <TouchableOpacity style = {styles.btnSubmit}
          onPress = { () => { props.navigation.navigate('Meu Perfil'), Alert.alert("","As informações foram salvas!") } }>
          <Text style = {styles.submitText}> Salvar</Text>

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
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 30,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#00b932',
    width: '40%',
    height: 45,
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 10,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
    alignSelf: 'center'
  },
  subTitulo: {
    justifyContent: 'flex-start',
    marginBottom: 15,
    color: '#fff',
    fontSize: 25,
  },
  register: {
    color: '#fff',
    marginTop: 20,
    fontSize: 12
  }
});