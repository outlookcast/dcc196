import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardElevado = ({ children, style }) => {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
card: {
    width: '95%', 
    height: '100%', 
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

export default CardElevado;
