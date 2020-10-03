import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
    return <Text style={styles.text}>This is a component.</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export { ComponentsScreen };
