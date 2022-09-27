import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {fetch} from "react-native/Libraries/Network/fetch";

export default function EasyModeComponent() {

    const [operationText, setOperationText] = useState("");
    const [number, onChangeNumber] = useState(null);
    const [operationResult, setOperationResult] = useState(null);
    const [urlImg, setUrlImg] = useState(null);
    const [messageImg, setMessageImg] = useState("");

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let generateOperation = () => {
        let number1 = getRandomInt(50);
        let number2 = getRandomInt(50);

        setOperationResult(number1 + number2);

        setOperationText(number1 + " + " + number2 + " = ?")
    }

    useEffect(() => {
        generateOperation()
    }, [])

    let onSubmitClick = () => {
        if (number == operationResult) {
            setMessageImg("Gagné connard !")
            fetchCatImg()
        }else{
            setMessageImg("Tes une grosse merde !")
            fetchCatImg()
        }
    }

    let fetchCatImg = () => {
        let url = "https://cataas.com/cat?json=true"
        fetch(url)
            .then((resp) => {
                resp.json().then((data) => {
                    setUrlImg(data.url)
                })
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{operationText}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={parseInt(number)}
                placeholder={`Type result here: ${operationResult}`}
                keyboardType="numeric"
            />
            <Button
                onPress={onSubmitClick}
                title="Submit"
                color='#000000'
            ></Button>

            {
                urlImg ? <Image style={styles.img} source={{uri:`https://cataas.com${urlImg}/says/${messageImg}`}} /> : null
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30
    },
    input: {
        height: 60,
        width: 300,
        margin: 30,
        borderWidth: 1,
        padding: 10,
    },
    img: {
        marginTop: 20,
        width: 300,
        height: 300,
        padding: 10
    }
});