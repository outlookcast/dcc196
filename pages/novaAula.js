import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import CardElevado from "../components/CardElevado";
import { AulaContext } from "../components/AulaContext";

const NovaAula = ({ navigation }) => {
  const [data, setData] = useState(new Date());
  const [titulo, setTitulo] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [dataFormatada, setDataFormatada] = useState("");
  const [startTime, setStartTime] = useState("");
  const [horario, setHorario] = useState("");
  const [startTimeFinal, setStartTimeFinal] = useState("");
  const [durationTime, setDurationTime] = useState("");
  const [inputHeight, setInputHeight] = useState(40);
  const { adicionarAula } = useContext(AulaContext);
  const [modalVisible, setModalVisible] = useState(false);

  const formatTime = (time) => {
    let formattedTime = time.replace(/[^0-9]/g, "");
    if (formattedTime.length >= 3) {
      formattedTime =
        formattedTime.slice(0, 2) + ":" + formattedTime.slice(2, 4);
    }
    return formattedTime;
  };
  const criarAula = () => {
    const novaAula = { titulo, data: dataFormatada, horario: startTime };
    adicionarAula(novaAula);
    setTitulo("");
    setDataFormatada("");
    setHorario("");
    setModalVisible(true);
  };
  const cancelarAula = () => {
    navigation.navigate("Tela Principal", {});
  };

  const handleTimeChange = (time, setter) => {
    if (time.length <= 5) {
      const formattedTime = formatTime(time);
      setter(formattedTime);
    }
  };
  const handleTimeChange2 = (time, setter) => {
    if (time.length <= 5) {
      const formattedTime = formatTime(time);
      setter(formattedTime);
    }
  };
  const handleDurationTime = (time, setter) => {
    if (time.length <= 5) {
      const formattedTime = formatTime(time);
      setter(formattedTime);
    }
  };
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

  const fechar = () => {
    navigation.navigate("Tela Principal", {})
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <CardElevado>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="file-o" size={24} color="#3A4D6A" />
            <Text style={styles.text}> Nome da Disciplina</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={titulo}
            onChangeText={setTitulo}
          />

          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="file-text-o" size={24} color="#3A4D6A" />
            <Text style={styles.text}> Descrição</Text>
          </View>
          <TextInput
            style={[styles.input, { height: inputHeight }]}
            placeholder="Descrição"
            multiline
            onContentSizeChange={(event) =>
              setInputHeight(event.nativeEvent.contentSize.height)
            }
          />

          <TouchableOpacity style={styles.dateButton} onPress={abrirPicker}>
            <FontAwesome name="calendar" size={24} color="#3A4D6A" />
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
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="time-outline" size={24} color="#3A4D6A" />
            <Text style={styles.text}> Horário</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <TextInput
              style={[
                styles.input,
                { width: 80, borderRadius: 15, textAlign: "center" },
              ]}
              value={startTime}
              onChangeText={(text) => handleTimeChange(text, setStartTime)}
              maxLength={5}
              placeholder="Ínicio"
              keyboardType="numeric"
            />
            <Text> às </Text>
            <TextInput
              style={[
                styles.input,
                { width: 80, borderRadius: 15, textAlign: "center" },
              ]}
              value={startTimeFinal}
              onChangeText={(text) =>
                handleTimeChange2(text, setStartTimeFinal)
              }
              maxLength={5}
              placeholder="Término"
              keyboardType="numeric"
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Ionicons name="time-outline" size={24} color="#3A4D6A" />
            <Text style={styles.text}> Duração</Text>
          </View>

          <TextInput
            style={[styles.input, { width: 80, textAlign: "center" }]}
            value={durationTime}
            placeholder="HH:MM"
            keyboardType="numeric"
            onChangeText={(text) => handleDurationTime(text, setDurationTime)}
          />

          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="users" size={24} color="#3A4D6A" />
            <Text style={styles.text}> Quantidade de alunos</Text>
          </View>

          <TextInput
            style={[styles.input, { width: 80, textAlign: "center" }]}
            placeholder="Alunos"
            keyboardType="numeric"
          />
        </CardElevado>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonCancelar}
          onPress={cancelarAula}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSalvar} onPress={criarAula}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <Modal
        animationType="slide" 
        transparent={true}    
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} 
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Configuração salva com sucesso</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={fechar}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </View>
    </ScrollView>
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
    borderRadius: 10,
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
    borderRadius: 15,
    marginBottom: 20,
    width: 170,
    borderWidth: 1,
    borderColor: "#3A4D6A",
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 100,
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3A4D6A",
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop:2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
});

export default NovaAula;
