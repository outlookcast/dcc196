import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import CardElevado from "../components/CardElevado";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
const RelatorioAula = () => {
  const tableData = [
    {
      data: "10/09/2024",
      name: "Laboratório de Dispositivos móveis",
      alunos: 18,
      duracao: "2 horas",
    },
    { data: "12/09/2024", name: "Algoritmo", alunos: 17, duracao: "1 hora" },
    {
      data: "20/10/2024",
      name: "Estrutura de Dados",
      alunos: 31,
      duracao: "2 horas",
    },
    {
      data: "17/11/2024",
      name: "Banco de Dados",
      alunos: 23,
      duracao: "2 horas",
    },
    {},
  ];
  const [mostrarInicio, setMostrarInicio] = useState(false);
  const [mostrarTermino, setMostrarTermino] = useState(false);
  const [dataFormatada, setDataFormatada] = useState("");
  const [dataFormatada2, setDataFormatada2] = useState("");
  const [data, setData] = useState(new Date());
  const [data2, setData2] = useState(new Date());
  const aoMudar = (evento, dataSelecionada) => {
    if (evento.type === "set" && dataSelecionada) {
      setData(dataSelecionada);
    }
    setMostrarInicio(false);
    setDataFormatada(dataSelecionada.toLocaleDateString("pt-BR"));
  };
  const aoMudar2 = (evento, dataSelecionada) => {
    if (evento.type === "set" && dataSelecionada) {
      setData2(dataSelecionada);
    }
    setMostrarTermino(false);
    setDataFormatada2(dataSelecionada.toLocaleDateString("pt-BR"));
  };
  return (
    <View style={styles.container}>
      <CardElevado style={styles.customCard}>
        <Text style={styles.titulo}>
          Veja a baixo seu relatório de aulas. Você também pode filtrar por
          período de tempo.{" "}
        </Text>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <FontAwesome name="calendar" size={24} color="#3A4D6A" />
          <Text style={[styles.titulo, { borderBottomWidth: 0 }]}>
            Escolha a data:{" "}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setMostrarInicio(true)}
            >
              <TextInput
                style={styles.dateButtonText}
                placeholder="Início: "
                placeholderTextColor={"black"}
              />
              {mostrarInicio && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={data}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={aoMudar}
                />
              )}
              <Text style={{ color: "#3A4D6A" }}>
                {dataFormatada
                  ? `${dataFormatada}`
                  : "Nenhuma data selecionada"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[styles.dateButton, { width: 160 }]}
              onPress={() => setMostrarTermino(true)}
            >
              <TextInput
                style={styles.dateButtonText}
                placeholder="Término: "
                placeholderTextColor={"black"}
              />
              {mostrarTermino && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={data2}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={aoMudar2}
                />
              )}
              <Text style={{ color: "#3A4D6A" }}>
                {dataFormatada2
                  ? `${dataFormatada2}`
                  : "Nenhuma data selecionada"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.dateButton,
            {
              justifyContent: "center",
              alignSelf: "flex-end",
              width: 130,
              paddingRight: 4,
              height: 30,
            },
          ]}
        >
        <TouchableOpacity style={{flexDirection: 'row'}}>
            <FontAwesome name="filter" size={18} color='#3A4D6A'/>
            <Text style={styles.dateButtonText}>Aplicar filtro</Text>
        </TouchableOpacity>
  
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderTopWidth: 1,
          }}
        >
          <Ionicons name="document-text-outline" size={24} color="#3A4D6A" />
          <Text
            style={[styles.titulo, { borderBottomWidth: 0, paddingTop: 10 }]}
          >
            {" "}
            Relatório:
          </Text>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.cabecalho}>
              <Text style={styles.tableHeader}>Data</Text>
              <Text style={styles.tableHeader}>Disciplina</Text>
              <Text style={styles.tableHeader}>Alunos</Text>
              <Text style={styles.tableHeader}>Duração</Text>
            </View>

            {tableData.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.data}</Text>
                <Text style={styles.tableCell}>{item.name}</Text>
                <Text style={styles.tableCell}>{item.alunos}</Text>
                <Text style={styles.tableCell}>{item.duracao}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={[
            styles.dateButton,
            {
              justifyContent: "center",
              alignSelf: "flex-end",
              paddingRight: 4,
              height: 30,
              marginTop: 160,
            },
          ]}
        >
          <Text style={styles.dateButtonText}>Extrair Relatório</Text>
        </TouchableOpacity>
      </CardElevado>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3A4D6A",
    borderBottomWidth: 1,
  },
  cabecalho: {
    flexDirection: "row",
    borderBottomWidth: 1,
    backgroundColor: "#ccc",
    paddingVertical: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    borderWidth: 2,
  },
  tableHeader: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  tableCell: {
    flex: 1,
    fontSize: 11,
    textAlign: "center",
  },
  dateButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "silver",
    shadowOpacity: 1,
    elevation: 10,
    padding: 0,
    borderRadius: 15,
    marginBottom: 20,
    width: 140,
  },
  dateButtonText: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: "bold",
    overflow: "visible",
  },
});

export default RelatorioAula;
