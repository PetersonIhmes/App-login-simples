import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, Image, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Fenix from './assets/fenix.png';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
	const [input, setInput] = useState('');
	const [hidePass, setHidePass] = useState(true);
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={Fenix} />
      <Text style={styles.titulo}>faça seu Login!</Text>
      <Text style={styles.subtitulo}> Na Fenix você
       faz a Diferença!</Text>
       <View>
      <TextInput
      style={styles.digite}
      placeholder='Usuario' />
      <TextInput
      style={styles.digite}
      placeholder='Senha'
      secureTextEntry={hidePass}
      value={input}
      onChangeText={ (texto) => setInput(texto) }
      />
      <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass) }>
      { hidePass ?
      <Ionicons name='eye' color='#000' size={20} />
      :
      <Ionicons name='eye-off' color='#000' size={20} />
      }
      </TouchableOpacity>
      
      <Button style={styles.enviar}
      title='Logar'
      color="#363636"
      />
      
     <Text style={styles.cadastre}> Faça seu <Text style={styles.span}> Cadastro</Text>
      </Text>
      
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
  	width: 200,
  	height: 200,
  },
  titulo: {
  	fontWeight: 'bold',
  	fontSize: 20,
  	textTransform: 'uppercase',
  	marginTop: 15,
  },
  subtitulo: {
  	fontSize: 10,
  	textTransform: 'uppercase',
  	color: '#A9A9A9',
  	marginBottom: 30,
  },
  digite: {
  	width: 250,
  	height: 50,
  	backgroundColor: '#C1C1C1',
  	borderRadius: 30,
  	padding: 15,
  	placeholderTextColor: '#D3D3D3',
  	color: '#808080',
  	marginTop: 15,
  	flexDirection: 'row',
  },
  icon: {
  	width: '15%',
  	height: 20,
  	justifyContent: 'center',
  	alignItems: 'center',
  	left: 208,
  	bottom: 35,
  },
  enviar: {
  	width: 200,
  	borderRadius: 30,
  },
  cadastre: {
  	marginTop: 200,
  	fontSize: 14,
  	color: '#363636',
  	textAlign: 'center',
  },
  span: {
  	fontWeight: 'bold',
  	fontSize: 18,
  },
});
