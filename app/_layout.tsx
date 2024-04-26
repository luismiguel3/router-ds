import React from 'react';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Layout(){
  return (
    <Stack screenOptions={{
      presentation: "fullScreenModal",
      contentStyle: {
        backgroundColor: '#222222',
      }
    }}>
      <Stack.Screen name='(tabs)' />
    </Stack>
  );
}