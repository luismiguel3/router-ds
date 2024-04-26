import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

export default function Today() {
  return (
    <>
      <View>
        <Text>Today</Text>
        <Text onPress={() => router.back()}>
          Voltar
        </Text>
      </View>
    </>
  );
}
