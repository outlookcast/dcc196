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


const MateriaisApoio = ({ route: { params: { aula } } }) => {

    const getFileIcon = (type) => {
      switch (type) {
        case 'pdf':
          return <FontAwesome name="file-pdf-o" size={24} color="#3A4D6A" />;
        case 'code':
          return <FontAwesome name="file-code-o" size={24} color="#3A4D6A" />;
        default:
          return <FontAwesome name="file-o" size={24} color="#3A4D6A" />;
      }
    };
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{ aula.titulo }</Text>
        </View>


        <View style={styles.dateTimeRow}>
          <FontAwesome name="calendar" size={24} color="#3A4D6A" />
          <Text style={styles.dateText}>{ aula.data }</Text>
        </View>

  
        <View style={styles.tableHeaderRow}>
          <Text style={styles.tableHeader}>Nome</Text>
          <Text style={styles.tableHeader}>Arquivo</Text>
        </View>

       
        <ScrollView>
          {aula.materiais?.map((file, index) => (
            <View key={index} style={styles.fileRow}>
              <Text style={styles.fileName}>{file.nome}</Text>
              {getFileIcon(file.tipo)}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  },
  dateText: {
    fontSize: 16,
    color: '#3A4D6A',
    marginLeft: 10,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    paddingBottom: 5,
    marginBottom: 10,
  },
  tableHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A4D6A',
  },
  fileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
  },
  fileName: {
    fontSize: 16,
    color: '#3A4D6A',
  },
});

export default MateriaisApoio;