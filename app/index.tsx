import react from 'react';
import { Link, Stack, Redirect } from 'expo-router';

export default function Layout(){
  return (
    <Redirect href='/(tabs)/Agenda/' />
  )
}