import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import CardElevado from "../components/CardElevado";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Perfil = () => {
  return (
    <View style={styles.container}>
      <CardElevado style={styles.customCard}>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="account-circle" size={100} color="#3A4D6A" />
          <Text style={{ fontSize: 30, paddingLeft: 40, color: "#3A4D6A" }}>
            Professor
          </Text>
        </View>

        <View style={styles.titulo}>
          <Ionicons name="person" size={30} color="#3A4D6A" />
          <Text style={styles.tituloText}> Nome </Text>
        </View>
        <View style={styles.titulo}>
          <MaterialIcons name="cake" size={30} color="#3A4D6A" />
          <Text style={styles.tituloText}> Idade </Text>
        </View>
        <View style={styles.titulo}>
          <Ionicons name="mail" size={30} color="#3A4D6A" />
          <Text style={styles.tituloText}> E-mail </Text>
        </View>
        <View style={styles.titulo}>
          <Ionicons name="call" size={30} color="#3A4D6A" />
          <Text style={styles.tituloText}> Contato </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.buttonCancelar,
            {
              backgroundColor: "silver",
              shadowOpacity: 1,
              shadowRadius: 100,
              elevation: 10,
              marginTop: 150,
            },
          ]}
        >
          <Text style={[styles.buttonText, { color: "dimgray" }]}>
            Alterar senha
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonCancelar}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSalvar}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </CardElevado>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  titulo: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
  },
  tituloText: {
    fontSize: 20,
    color: "#3A4D6A",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "auto",
  },
  buttonCancelar: {
    backgroundColor: "red",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "38%",
  },
  buttonSalvar: {
    backgroundColor: "green",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "38%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Perfil;
