import React, { useState} from "react";
import { StyleSheet, View, Text, Pressable, TouchableOpacity, Modal } from "react-native";
import { Input } from 'react-native-elements';

import CardElevado from "../components/CardElevado";
import { Ionicons, FontAwesome } from "@expo/vector-icons";


const CadastroSala = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const fechar = () => {
    navigation.navigate("Tela Principal", {})
  };

  return (
    <View style={styles.container}>
      <CardElevado style={styles.customCard}>
      <View style={{flexDirection: "row", alignItems: 'center'}}>
          <Ionicons name="document-text-outline" size={28} color="#3A4D6A" />
          <Text style={styles.title}> Algoritmos</Text>
        </View>

        <View style={styles.dateTimeRow}>
          <FontAwesome name="calendar" size={24} color="#3A4D6A" />
          <Text style={styles.dateText}>10/09/2024  19:00-21:00</Text>
        </View>

   
        <Text style={[styles.title, {marginTop: 20}]}> Nome </Text>
        <Input keyboardType="default" placeholder="Ex: Sala 01"></Input> 
        <Text style={[styles.title, {marginTop: 20}]}> Capacidade </Text>
        <Input keyboardType="numeric"></Input> 
        <Text style={[styles.title, {marginTop: 20}]}> Localização </Text>
        <Input keyboardType="default"></Input> 

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonCancelar} onPress={fechar}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSalvar} onPress={() => setModalVisible(true)}>
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
              onPress={fechar}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Modal>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#3A4D6A',
  },
  dateTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#3A4D6A',
    marginLeft: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "auto",
    paddingTop: 20,
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
});

export default CadastroSala;
