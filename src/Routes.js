import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons'

import Home from './pages/Home'
import CriaConta from './pages/CriaConta'
import DadosPessoais from './pages/DadosPessoais'
import DadosContatos from './pages/DadosContatos'
import Perfil from './pages/Perfil'
import Aluguel from './pages/Aluguel'
import Pagamento from './pages/Pagamento'
import ConfVeiculo from './pages/ConfVeiculo';

const Tab = createBottomTabNavigator();
const AluguelStack = createStackNavigator();
const CriaContaStack = createStackNavigator();
const PerfilContaStack = createStackNavigator();
const HomeStack = createStackNavigator();
const PagamentoStack = createStackNavigator();

const AluguelStackScreen = () => (
  <AluguelStack.Navigator>
    <AluguelStack.Screen name = "Aluguel" component = {Aluguel} />
  </AluguelStack.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name = "LogIn" component = {Home}/>
    <HomeStack.Screen name = "CriaConta" component = {CriaConta} />
  </HomeStack.Navigator>
);

const PerfilStackScreen = () => (
  <AluguelStack.Navigator>
    <AluguelStack.Screen name = "Meu Perfil" component = {Perfil} />
    <AluguelStack.Screen name = "Dados Pessoais" component = {DadosPessoais} />
    <AluguelStack.Screen name = "Contatos" component = {DadosContatos} />
  </AluguelStack.Navigator>
);

const PagamentoStackScreen = () => (
  <PagamentoStack.Navigator>
    <PagamentoStack.Screen name = "Pagamento" component = {Pagamento}/>
  </PagamentoStack.Navigator>
);

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Sair"
      >
        <Tab.Screen
          name="Aluguel"
          component={AluguelStackScreen}
          options={{ tabBarIcon: ({ size, focused}) => {
            return (
              <AntDesign 
                name= "car"
                size= {size}
                Color= "#000"
              />
            )
          }
        }}
        />
        <Tab.Screen
          name="Meu Perfil"
          component={PerfilStackScreen}
          options={{ tabBarIcon: ({ size, focused}) => {
            return (
              <AntDesign 
                name= "user"
                size= {size}
                Color= "#000"
              />
            )
          }
        }}
        />

        <Tab.Screen
          name="Pagamento"
          component={PagamentoStackScreen}
          options={{ tabBarIcon: ({ size, focused}) => {
            return (
              <Entypo 
                name= "credit-card"
                size= {size}
                Color= "#000"
              />
            )
          }
        }}
        />
        
        <Tab.Screen
          name="Configurações"
          component={ConfVeiculo}
          options={{ tabBarVisible: true, tabBarIcon: ({ size, focused}) => {
            return (
              <Entypo 
                name= "chevron-down"
                size= {size}
                Color= "#000"
              />
            )
          }
        }}
        />

        <Tab.Screen
          name="Sair"
          component={HomeStackScreen}
          options={{ tabBarVisible: false, tabBarIcon: ({ size, focused}) => {
            return (
              <Entypo 
                name= "chevron-down"
                size= {size}
                Color= "#000"
              />
            )
          }
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    )
  }

