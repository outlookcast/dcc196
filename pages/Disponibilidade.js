import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CardElevado from "../components/CardElevado";
import { CheckBox } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

const DiaDaSemana = ({ dia }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("opcao0");

  return (
    <View style={{ paddingBottom: 10 }}>
      <View style={{ borderWidth: 2, borderRadius: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={styles.dia}>{dia}</Text>
          <CheckBox
            title=""
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
            checkedColor="green"
            uncheckedColor="red"
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={styles.horarioText}>Horário:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Nenhum" value="opcao0" />
              <Picker.Item label="06:00 às 08:00" value="opcao1" />
                <Picker.Item label="08:00 às 10:00" value="opcao2" />
                <Picker.Item label="10:00 às 12:00" value="opcao3" />
                <Picker.Item label="12:00 às 14:00" value="opcao4" />
                <Picker.Item label="14:00 às 16:00" value="opcao5" />
                <Picker.Item label="16:00 às 18:00" value="opcao6" />
                <Picker.Item label="18:00 às 20:00" value="opcao7" />
                <Picker.Item label="20:00 às 22:00" value="opcao8" />
            </Picker>
          </View>
        </View>
        <View style={{ paddingTop: 10, paddingBottom: 7, left: 10 }}>
          <TouchableOpacity style={styles.button}>
            <Text> + Adicionar Horário</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Disponibilidade = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);

    const salvar = () => {
        setModalVisible(false);
        navigation.navigate("Tela Principal", {});
    };

    return (
    <ScrollView>
      <View style={styles.container}>
        <CardElevado style={styles.customCard}>
          <Text style={styles.titulo}>
            Selecione os dias e horários disponíveis para dar aula
          </Text>

          <View
            style={{ flexDirection: "row", paddingTop: 10, paddingBottom: 10 }}
          >
            <FontAwesome name="calendar" size={24} color="#3A4D6A" />
            <Text style={styles.subtitulo}> Dias da Semana</Text>
          </View>

          <DiaDaSemana dia="Segunda-Feira" />
          <DiaDaSemana dia="Terça-Feira" />
          <DiaDaSemana dia="Quarta-Feira" />
          <DiaDaSemana dia="Quinta-Feira" />
          <DiaDaSemana dia="Sexta-Feira" />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonCancelar}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSalvar}  onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
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
              onPress={salvar}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        </CardElevado>
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
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3A4D6A",
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#3A4D6A",
  },
  dia: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#3A4D6A",
    padding: 10,
  },
  horarioText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3A4D6A",
    marginTop: 11,
  },
  pickerContainer: {
    alignItems: "center",
    backgroundColor: "silver",
    borderRadius: 16,
    height: 50,
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 2,
    shadowRadius: 14,
    elevation: 10,
  },
  picker: {
    width: 200,
    height: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "silver",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 2,
    shadowRadius: 14,
    elevation: 10,
    width: 150,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
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

export default Disponibilidade;
