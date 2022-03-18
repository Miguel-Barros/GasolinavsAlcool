import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.titulo}>Gasolina</Text>
        <TextInput style={styles.input} keyboardType='number' placeholder={'Insira o valor da gasolina'} />
        <Text style={styles.titulo}>Alcool</Text>
        <TextInput style={styles.input} keyboardType='number' placeholder={'Insira o valor do alcool'} />
        <TouchableOpacity style={styles.btn} ><Text>Botão</Text></TouchableOpacity>
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
  box: {
    width: '50%',
    height: '50%',
    backgroundColor: "#FFCC",
    borderWidth: 1,
    borderColor: '#8F8F8F',
    borderRadius: 20,
    padding: '10%',
  },
  input: {
    width: '100%',
    height: '20%',
    borderWidth: 0.5,
    borderColor: "#c3c3c3",
    borderRadius: 12,
    textAlign: 'center'
  },
  titulo: {
    textAlign: 'center',
    color: "gray"
  },
  btn: {
    borderWidth: 1.5,
    width: '100%',
    height: '10%',
    textAlign: 'center',
    borderRadius: 15,
    marginTop: '5%'
  }
});
