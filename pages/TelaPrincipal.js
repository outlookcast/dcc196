import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import CardElevado from "../components/CardElevado";

const TelaPrincipal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CardElevado style={styles.customCard}>
        <Pressable
          onPress={() => navigation.navigate("Cadastro")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Cadastro</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Nova Aula")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Nova Aula</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Exemplo")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Exemplo</Text>
        </Pressable>
      </CardElevado>
    </View>
  );
};

const styles = StyleSheet.create({
  customCard: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  button: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 5,
    backgroundColor: "#3A4D6A",
    width: "60%",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default TelaPrincipal;
