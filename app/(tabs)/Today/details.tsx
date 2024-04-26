import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function Details() {

  const { previousRoute } = useLocalSearchParams();

  return (
    <View>
      <Text>Details</Text>
      <Text
        onPress={() => {
          router.replace("/Today/");
          router.replace(previousRoute as any);
        }}>
        Voltar
      </Text>
    </View>
  );
}
