import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CardElevado from "../components/CardElevado";

const NovaAula = () => {
    const [data, setData] = useState(new Date());
    const [mostrar, setMostrar] = useState(false);
    const [dataFormatada, setDataFormatada] = useState("");
  
    const aoMudar = (evento, dataSelecionada) => {
      if (evento.type === "set" && dataSelecionada) {
        setData(dataSelecionada);
      }
      setMostrar(false);
      setDataFormatada(dataSelecionada.toLocaleDateString("pt-BR"));
    };
  
    const abrirPicker = () => {
      setMostrar(true);
    };
  return (
    <View style={styles.container}>
      <CardElevado>
      <Text>Nome da Disciplina</Text>
        <TextInput style={styles.input} placeholder="Título" />
        <Text>Descrição</Text>
        <TextInput style={styles.input} placeholder="Descrição" multiline />
        <TouchableOpacity style={styles.dateButton} onPress={abrirPicker}>
          <FontAwesome name="calendar" size={24} color="black" />
          <Text style={styles.dateButtonText}>Selecionar Data</Text>
        </TouchableOpacity>
        {mostrar && (
          <DateTimePicker
            testID="dateTimePicker"
            value={data}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={aoMudar}
          />
        )}
        <Text style={styles.selectedDateText}>
          {dataFormatada
            ? `Data: ${dataFormatada}`
            : "Nenhuma data selecionada"}
        </Text>
        <Text>Duração</Text>
        <TextInput
          style={styles.input}
          placeholder="Duração"
          keyboardType="numeric"
        />
        <Text>Quantidade de alunos</Text>
        <TextInput
          style={styles.input}
          placeholder="Alunos"
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonCancelar}
            onPress={() => console.log("Ação cancelada")}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSalvar}
            onPress={() => console.log("Salvar dados")}
          >
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
  input: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
  },
  dateButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 170,
    borderWidth: 1,
    borderColor: "#00BFFF",
  },
  dateButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  selectedDateText: {
    fontSize: 16,
    color: "black",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  buttonCancelar: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "48%",
  },
  buttonSalvar: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "48%",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  papel: {
    width: 340, 
    height: 650, 
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 10, 
    elevation: 10,
  },
});

export default NovaAula;
