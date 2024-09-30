import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
} from "react-native";
import CardElevado from "../components/CardElevado";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Input } from "react-native-elements";

const Perfil = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const fechar = () => {
    navigation.navigate("Tela Principal", {})
  };
  return (
    <ScrollView>
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
        <Input keyboardType="default"></Input> 
        <View style={styles.titulo}>
          <MaterialIcons name="cake" size={30} color="#3A4D6A" />
          <Text style={styles.tituloText}> Idade </Text>
        </View>
        <Input keyboardType="numeric"></Input>
        <View style={styles.titulo}>
          <Ionicons name="mail" size={30} color="#3A4D6A" />
          <Text style={styles.tituloText}> E-mail </Text>
        </View>
        <Input keyboardType="email-address"></Input>
        <View style={styles.titulo}>
          <Ionicons name="call" size={30} color="#3A4D6A" />
          <Text style={styles.tituloText}> Contato </Text>
        </View>
        <Input keyboardType="phone-pad"></Input>
        <TouchableOpacity
          style={[
            styles.buttonCancelar,
            {
              backgroundColor: "silver",
              shadowOpacity: 1,
              shadowRadius: 100,
              elevation: 10,
              marginTop: 50,
              paddingBottom: 10,
            },
          ]}
        >
          <Text style={[styles.buttonText, { color: "dimgray" }]}>
            Alterar senha
          </Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
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

export default Perfil;
