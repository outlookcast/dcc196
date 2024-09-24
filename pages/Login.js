import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
export default function Login({navigation}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.font}>E-mail:</Text>
        <TextInput
          editable
          value={email}
          maxLength={100}
          onChange={(text) => setEmail(text)}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.font}>Senha:</Text>
        <TextInput
          editable
          value={senha}
          maxLength={100}
          onChange={(text) => setSenha(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View>
        <Pressable
          onPress={() => navigation.navigate('Cadastro')}
          style={styles.button}
        >
          <Text style={styles.buttonText} >Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#3A4D6A",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
  },
  font: {
    fontSize: 30,
    textAlign: "left",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#3A4D6A",
    width: "100%",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  view: {
    alignItems: "center",
  }, 
});
