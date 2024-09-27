import React, { useContext} from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import CardElevado from "../components/CardElevado";
import { AulaContext } from "../components/AulaContext";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const ListaAula = () => {
  const { aulas, removerAula, removerTodasAulas } = useContext(AulaContext);
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <CardElevado>
        {aulas.map((aula, index) => (
          <View key={index} style={styles.card}>
            <View style={{ flexDirection: "row", alignItems:'center', position:"relative" }}>
                <FontAwesome name="calendar-o" size={60} color="#3A4D6A" />
                <Text style={styles.titulo}> {aula.titulo}</Text>
                
            </View>
            <View style={{flexDirection: "row", justifyContent:'space-between'}}>
                <Text style={styles.data_hora}>Data: {aula.data}</Text>
                <TouchableOpacity onPress={() => removerAula(index)}>
                    <FontAwesome name="trash" size={28} color="red" />
                </TouchableOpacity>
                
            </View>
            <Text style={styles.data_hora}>Horário: {aula.horario}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.excluirTudoButton} onPress={removerTodasAulas}>
            <Text style={styles.excluirTudoText}>Excluir todos</Text>
        </TouchableOpacity>
      </CardElevado>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

    contentContainer: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
      },
  card: {
    width: "100%",
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    flexWrap: "wrap"
  },
  data_hora: {
    fontSize: 16,
  },
  numero:{
    position: 'absolute'
  },
  excluirTudoButton: {
    backgroundColor: "red",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    position:"absolute",
    bottom: 0,
    width: "80%",
    transform: [{ translateX: 55 }],
    borderRadius: 10,
  },
  excluirTudoText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ListaAula;
