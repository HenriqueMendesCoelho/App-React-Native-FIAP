import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Animated, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Pagamento(props) {

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
                <Text style={styles.subTitulo}>Nome do titular</Text>
            </View>
            <TextInput
            style={styles.input}
            placeholder= "Nome"
            autoCorrect= {false}
            onChangeText= {() => {}}
            defaultValue= "Henrique Mendes"
            />

            <View>
                <Text style={styles.subTitulo}>Nº Cartão</Text>
            </View>
            <TextInput
            style={styles.input}
            placeholder= "Nome"
            autoCorrect= {false}
            onChangeText= {() => {}}
            defaultValue= "5117.3923.8233.4886"
            />
            <View>
                <Text style={styles.subTitulo}>Data de Validade</Text>
            </View>
            <TextInput
            style={styles.input}
            placeholder= "CPF"
            autoCorrect= {false}
            onChangeText= {() => {}}
            defaultValue= "02/02/2022"
            />
            <View>
                <Text style={styles.subTitulo}>Bandeira do Cartão</Text>
            </View>
            <TouchableOpacity style = {styles.btnSubmit}
            onPress = { () => { props.navigation.navigate('Meu Perfil'), Alert.alert("","As informações foram salvas!") } }>
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
    width: '90%',
    marginBottom: 60,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
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
    fontSize: 25,
  },
  register: {
    color: '#fff',
    marginTop: 20,
    fontSize: 12
  }
}); 