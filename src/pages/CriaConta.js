import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Animated, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function CriaConta(props) {

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
    <ScrollView>
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
            <Text style={styles.subTitulo}>Nome Completo</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder= "Nome"
          autoCorrect= {false}
          onChangeText= {() => {}}
        />
        <View>
            <Text style={styles.subTitulo}>E-mail</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder= "E-mail"
          autoCorrect= {false}
          onChangeText= {() => {}}
        />
        <View>
            <Text style={styles.subTitulo}>CPF</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder= "CPF"
          autoCorrect= {false}
          onChangeText= {() => {}}
        />
        <View>
            <Text style={styles.subTitulo}>RG</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder= "RG"
          autoCorrect= {false}
          onChangeText= {() => {}}
        />
        <View>
            <Text style={styles.subTitulo}>Celular</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder= "Celular"
          autoCorrect= {false}
          onChangeText= {() => {}}
        />
        <TouchableOpacity style = {styles.btnSubmit}
          onPress = { () => { props.navigation.navigate('LogIn'), Alert.alert("","Conta criada com sucesso!") } }>
          <Text style = {styles.submitText}> Salvar</Text>

        </TouchableOpacity>
            
      </Animated.View>
    </KeyboardAvoidingView>
    </ScrollView>
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
    width: '100%',
    color: '#222',
    fontSize: 10,
    borderRadius: 7,
    padding: 8,
    marginBottom: 40,
  },
  btnSubmit: {
    backgroundColor: '#00b932',
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
    justifyContent: 'flex-start',
    marginBottom: 15,
    color: '#fff',
    fontSize: 20,
  },
  register: {
    color: '#fff',
    marginTop: 20,
    fontSize: 12
  },
  scrollView: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#0066cc'
  }
}); 