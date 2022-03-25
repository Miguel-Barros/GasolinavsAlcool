import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [gasolina, setGasolina] = useState();
  const [alcool, setAlcool] = useState();
  const [result, setResult] = useState();
  const [vantagem, setVantagem] = useState();

  function calcular() {
    let calc = (parseFloat(alcool) / parseFloat(gasolina));
    calc = calc.toFixed(2);
    if (calc >= 0.7) {
      // abastece com gasolina
      setResult(calc);
      setVantagem("Abasteça com gasosa lindão!!");
    } else if (calc <= 0.7) {
      // abastece com alcool
      setResult(calc);
      setVantagem("Abasteça com alcool boy!!");
    }
  }

  function limpar() {
    setResult(null);
    setGasolina("");
    setAlcool("");
    setVantagem("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.h1}>Gasosa ou Alquin?</Text>
        <Text style={styles.titulo}>Gasolina</Text>
        <TextInput style={styles.input} value={gasolina} keyboardType='numeric' maxLength={5} placeholder={'Valor da gasolina'} onChangeText={(value) => setGasolina(value)} />
        <Text style={styles.titulo}>Alcool</Text>
        <TextInput style={styles.input} value={alcool} keyboardType='numeric' maxLength={5} placeholder={'Valor da alcool'} onChangeText={(value) => setAlcool(value)} />
        <TouchableOpacity style={styles.btn} onPress={calcular} ><Text style={styles.botao} >Calcular</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={limpar}><Text style={styles.botao}>Limpar</Text></TouchableOpacity>
        <Text style={styles.titulo}>A diferença entre ambas é: {result}</Text>
        <Text style={styles.vantagem}>{vantagem}</Text>
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
    backgroundColor: '#4E9FE6'
  },
  box: {
    width: '70%',
    height: '55%',
    backgroundColor: "#0FEFFF",
    borderWidth: 1,
    borderColor: '#19AFE6',
    borderRadius: 20,
    padding: '10%',
  },
  input: {
    width: '100%',
    height: '10%',
    fontSize: 20,
    borderWidth: 0.5,
    borderColor: "#2FB6FA",
    borderRadius: 12,
    textAlign: 'center',
    backgroundColor: '#19AFE6',
    color: 'white'
  },
  titulo: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 700,
    color: "black"
  },
  btn: {
    borderWidth: 1.5,
    width: '100%',
    height: '10%',
    textAlign: 'center',
    borderRadius: 15,
    marginTop: '10%',
    borderColor: "#2FB6FA",
    backgroundColor: '#2FB6FA'
  },
  h1: {
    marginTop: '-15%',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 700,
    color: "red",
    marginBottom: '5%',
  },
  vantagem: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 700,
    color: "red"
  },
  botao: {
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 700,
    color: "white"
  }
});
