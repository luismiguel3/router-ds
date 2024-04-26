import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { router, Link } from "expo-router";

export default function Agenda() {
  return (
    <>
      <View>
        <Text>aGENDA</Text>
        <Link href="/Agenda/atendimento">
          <Text>Atendimento</Text>
        </Link>
        <Text onPress={() => router.back()}>Voltar</Text>
      </View>
    </>
  );
}
