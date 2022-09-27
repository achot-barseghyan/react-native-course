import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect} from "react";
import EasyModeComponent from "../components/EasyModeComponent";

export default function GameView() {

    return (
        <View style={styles.container}>
            <EasyModeComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});