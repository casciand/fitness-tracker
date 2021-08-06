import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Fonts from "../constants/fonts";
import Colors from "../constants/colors";

const Student = (props) => {
  const formatTime = (time) => {
    const csecs = time * 100;

    const msecs = `0${csecs % 100}`.slice(-2);
    const seconds = `0${Math.floor(csecs / 100) % 60}`.slice(-2);
    const minutes = `0${Math.floor(csecs / 100 / 60)}`.slice(-2);

    return `${minutes}:${seconds}.${msecs}`;
  };

  let moreInfo;

  if (props.curlUpsMode) {
    if (props.curlUps) {
      moreInfo = `Attempts: ${props.curlUps.length}`;
    } else {
      moreInfo = "Incomplete";
    }
  } else if (props.pullUpsMode) {
    if (props.pullUps) {
      moreInfo = `Attempts: ${props.pullUps.length}`;
    } else {
      moreInfo = "Incomplete";
    }
  } else if (props.pushUpsMode) {
    if (props.pushUps) {
      moreInfo = `Attempts: ${props.pushUps.length}`;
    } else {
      moreInfo = "Incomplete";
    }
  } else if (props.sitAndReachMode) {
    if (props.sitAndReach) {
      moreInfo = `Attempts: ${props.sitAndReach.length}`;
    } else {
      moreInfo = "Incomplete";
    }
  } else if (props.mileMode) {
    if (props.mile) {
      moreInfo = `Attempts: ${props.mile.length}`;
    } else {
      moreInfo = "Incomplete";
    }
  } else if (props.shuttleMode) {
    if (props.shuttle) {
      moreInfo = `Attempts: ${props.shuttle.length}`;
    } else {
      moreInfo = "Incomplete";
    }
  } else {
    moreInfo = "";
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.student}>
        <Text style={styles.name}>
          {props.lastName}, {props.firstName}
        </Text>
        <Text style={styles.name}>{moreInfo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  student: {
    padding: 10,
    margin: 2,
    height: 40,
    backgroundColor: Colors.colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.24,
    elevation: 5,
  },

  name: {
    fontFamily: Fonts.secondary,
    color: "white",
  },
});

export default Student;
