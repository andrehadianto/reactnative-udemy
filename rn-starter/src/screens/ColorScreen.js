import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { ColorBlock } from "../components/ColorBlock";

const ColorScreen = () => {
    const [data, setData] = useState([]);

    const GenerateRandomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red}, ${green}, ${blue})`;
    };

    const AddColorBlock = () => {
        const tmp = data;
        tmp.push(GenerateRandomColor());
        setData(tmp);
    };

    return (
        <View>
            <Button title="Add Color" onPress={AddColorBlock} />
            {data && data.length > 0 ? (
                data.map((el, i) => <ColorBlock color={el} key={i} />)
            ) : (
                <Text>Click the button!</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorScreen;
