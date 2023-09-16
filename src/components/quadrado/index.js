import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Quadrado = ({ menssagem,cor }) => (
    <View style={[styles.square,{backgroundColor: cor}]}>
      <Text style={styles.menssagem}>{menssagem}</Text>
    </View>
  );

  export default function CriaQuadrado() {
    return (
      <View style={styles.container}>
        <Quadrado menssagem="Quadrado 1" cor= "red"/>
        <Quadrado menssagem="Quadrado 2" cor="blue"/>
        <Quadrado menssagem="Quadrado 3" cor="green"/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    square: {
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    mensagem: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });