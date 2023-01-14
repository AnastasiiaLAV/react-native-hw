import React, { useState } from "react";
import { 
    StyleSheet,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Button, 
    Text,
} from "react-native";

export default function RegistrationScreen() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const nameHandler = (text) => setName(text);
    const passwordHandler = (text) => setPassword(text);

    const onLogin = () => {
        Alert.alert("Credentials", `${name} + ${password}`);
    };

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <Text>Регистрация</Text>
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
        <TextInput
            value={name}
            onChangeText={nameHandler}
            placeholder="Логин"
            style={styles.input}
        />

        <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Адрес электронной почты"
            secureTextEntry={true}
            style={styles.input}
        />

        <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Пароль"
            secureTextEntry={true}
            style={styles.input}
        />

        <Button title={"Зарегистрироваться"} style={styles.input} onPress={onLogin} />

        </KeyboardAvoidingView>
    </View>
    </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
        },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 10,
        },
    });