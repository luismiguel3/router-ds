import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function Atendimento() {
  return (
    <>
      <View>
        <Text>Atendimento</Text>
        <Link href={{
          pathname:"/Today/details",
          params: {
            previousRoute: "Agenda/atendimento"
          }
          }} >Detalhes</Link>
        <Text onPress={() => router.back()}>Voltar</Text>
      </View>
    </>
  );
}