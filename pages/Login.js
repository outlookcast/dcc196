import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CardElevado from "../components/CardElevado";

export default function Login({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <CardElevado style={styles.customCard}>
        <View style={styles.inputContainer}>
          <Text style={styles.font}>E-mail:</Text>
          <TextInput
            editable
            value={email}
            maxLength={100}
            onChange={(text) => setEmail(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
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
        <Pressable
          onPress={() => navigation.navigate("TelaPrincipal")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

      </CardElevado>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: "#fff",
    padding: 20,
  },
  customCard:{
    justifyContent:'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%', 
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",  
    borderColor: "#3A4D6A",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,  
  },
  font: {
    fontSize: 30,
    textAlign: "left",
  },
  button: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#3A4D6A",
    width: "70%",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
