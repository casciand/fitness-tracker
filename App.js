import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/LoginScreen";
import ClassScreen from "./screens/ClassScreen";
import RosterScreen from "./screens/RosterScreen";
import FitnessTestsScreen from "./screens/FitnessTestsScreen";
import StudentInfoScreen from "./screens/StudentInfoScreen";
import StaticFitnessScreen from "./screens/StaticFitnessScreen";
import TimerFitnessScreen from "./screens/TimerFitnessScreen";
import AddClassScreen from "./screens/AddClassScreen";
import AddStudentScreen from "./screens/AddStudentScreen";
import AddStaticResultScreen from "./screens/AddStaticResultScreen";

import Colors from "./constants/colors";
import Fonts from "./constants/fonts";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: styles.header }} initialRoute="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Class" component={ClassScreen} />
        <Stack.Screen name="Roster" component={RosterScreen} />
        <Stack.Screen name="Fitness" component={FitnessTestsScreen} />
        <Stack.Screen name="InfoStudent" component={StudentInfoScreen} />
        <Stack.Screen name="Static" component={StaticFitnessScreen} />
        <Stack.Screen name="Timer" component={TimerFitnessScreen} />
        <Stack.Screen name="AddStudent" component={AddStudentScreen} />
        <Stack.Screen name="AddClass" component={AddClassScreen} />
        <Stack.Screen name="AddStatic" component={AddStaticResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    width: "100%",
    height: 120,
    paddingTop: 36,
    paddingLeft: 25,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: Colors.colors.primary,
    fontSize: 30,
    fontFamily: Fonts.primary,
    width: "80%",
  },

  navigator: {
    height: "10%",
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
});
