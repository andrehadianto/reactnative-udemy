import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ColorBlock = (props) => {
    return (
        <View style={styles.block}>
            <Text>{props.color}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        height: 100,
        width: 100,
        backgroundColor: props.color,
    },
});

export { ColorBlock };
