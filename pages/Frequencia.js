import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { CheckBox } from "react-native-elements";
import { AulaContext } from '../components/AulaContext';

const Frequencia = ({ route: { params: { aula } } }) => {
  const { setAula } = useContext(AulaContext);

  const toggleAttendance = (index) => {
    const newAttendance = [...aula.frequencia];
    newAttendance[index].presente = !newAttendance[index].presente;
    setAula({ ...aula, frequencia: newAttendance });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header with course name and icon */}
        <View style={styles.header}>
          <Ionicons name="document-text-outline" size={28} color="#3A4D6A" />
          <Text style={styles.title}>Algoritmos</Text>
        </View>

        {/* Date and time */}
        <View style={styles.dateTimeRow}>
          <FontAwesome name="calendar" size={24} color="#3A4D6A" />
          <Text style={styles.dateText}>{aula.data}</Text>
        </View>

        {/* Table header */}
        <View style={styles.tableHeaderRow}>
          <Text style={styles.tableHeader}>Nome</Text>
          <Text style={styles.tableHeader}>Presença</Text>
        </View>

        {/* Attendee list */}
        <ScrollView>
          {aula.frequencia?.map((attendee, index) => (
            <View key={index} style={styles.attendeeRow}>
              <Text style={styles.attendeeName}>{attendee.nome}</Text>
              <CheckBox
                checked={attendee.presente}
                onPress={() => toggleAttendance(index)}
                style={styles.checkbox}
              />
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
  attendeeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
  },
  attendeeName: {
    fontSize: 16,
    color: '#3A4D6A',
  },
  checkbox: {
    marginRight: 10,
  },
});

export default Frequencia;
