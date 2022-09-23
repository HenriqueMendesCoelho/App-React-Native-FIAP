import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Animated, Button, Alert, Picker } from 'react-native';
import Slider from '@react-native-community/slider';
import { color, Value } from 'react-native-reanimated';
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';

export default function ConfVeiculo(props) {

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

    state = (mirror='Central', value=50) =>{
        mirror:itemValue
    }

    handleSliderChange = (value) => {
        alert(value)
    }

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
        ></Animated.View>
        <View>
            <Text style={styles.submitText}> Temperatura do Ar Condicionado </Text>
        </View>
        <Slider
            style={{width: 300, height: 40}}
            minimumValue={0}
            maximumValue={100}
            step={10}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onSlidingComplete={this.handleSliderChange}
        />
        <View>
            <Text style={styles.submitText}> Posição dos Retrovisores </Text>
        </View>
        <Picker 
            style={{width:'50%'}}
            selectedValue={this.state.mirror}
            onValueChange={(itemValue,indexValue)=>this.state}
            >
                <Picker.Item color= '#000' label='Central' value='Central'/>
                <Picker.Item color= '#000' label='Direito' value='Direito'/>
                <Picker.Item color= '#000' label='Esquerdo' value='Esquerdo'/>
        </Picker>
        
        
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
      submitText: {
        color: '#FFF',
        fontSize: 18,
        alignSelf: 'center'
      },
  }); 