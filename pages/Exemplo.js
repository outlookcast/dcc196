import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import CardElevado from "../components/CardElevado";

const Exemplo = () => {
  return (
    <View style={styles.container}>
      <CardElevado style={styles.customCard}>
      {/*Conteúdo da PÁGINA*/}
      </CardElevado>
    </View>
  );
};

const styles = StyleSheet.create({
//   customCard: { Para centralizar o conteúdo no meio da tela
//     justifyContent: "center",
//     alignItems: "center",
//   },
  container: { // Conteúdo fica no topo
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
});

export default Exemplo;
