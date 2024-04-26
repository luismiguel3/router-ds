import React from "react";
import { Link, Stack, Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Layout() {
  return (
    <Tabs backBehavior="history" screenOptions={{
      tabBarActiveBackgroundColor: "#222222",
      tabBarInactiveBackgroundColor: "#333333",
    }}>
      <Tabs.Screen name="Agenda" options={{ title: "Agenda" }} />
      <Tabs.Screen name="Today" options={{ title: "Today" }} />
      <Tabs.Screen name="Pacient" options={{ title: "Pacient" }} />
    </Tabs>
  );
}
