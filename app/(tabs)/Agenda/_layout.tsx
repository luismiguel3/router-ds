import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="atendimento" />
    </Stack>
  );
}
