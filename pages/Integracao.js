import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Modal } from "react-native";
import { CheckBox } from "react-native-elements";
import CardElevado from "../components/CardElevado";

export default function Integracao({ navigation }) {
  const [googleCalendar, setGoogleCalendar] = useState(false);
  const [outlook, setOutlook] = useState(false);
  const [ios, setIos] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const salvar = () => {
    setModalVisible(false);
    navigation.navigate("Tela Principal", {});
  };

  const cancelar = () => {
    setModalVisible(false);
    navigation.navigate("Tela Principal", {});
  };

  return (
    <View style={styles.container}>
      <CardElevado>
        <CheckBox
          title="Google Calendar"
          checked={googleCalendar}
          onPress={() => setGoogleCalendar(!googleCalendar)}
        />
        <CheckBox
          title="Outlook"
          checked={outlook}
          onPress={() => setOutlook(!outlook)}
        />
        <CheckBox title="iOS" checked={ios} onPress={() => setIos(!ios)} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonCancelar} onPress={cancelar}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSalvar}
            onPress={() => setModalVisible(true)}
          >
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
              <Text style={styles.modalText}>
                Integrações salvas com sucesso
              </Text>
              <TouchableOpacity style={styles.closeButton} onPress={salvar}>
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </CardElevado>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "160%",
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
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 2,
  },
});
