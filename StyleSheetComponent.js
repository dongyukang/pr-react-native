import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    center: {
        alignItems: "center"
    } 
});

const Greetings = (props) => {
    return (
        <View style= { styles.center }>
            <Text> { props.name }</Text>
        </View>
    )
}

const StyleSheetComponent = () => {
    return(
        <View>
            <Text> StyleSheet Component </Text>
            <Greetings name="Test" />
        </View>

    )
};

export default StyleSheetComponent;