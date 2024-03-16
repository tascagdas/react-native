import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = async () => {
        try {
            let requestObject = {
                username: username,
                password: password
            }
            await axios.post("https://fummyjson.com/auth/login", requestObject).then(res => res.data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>


            <TextInput placeholder='username' style={styles.input} value={username} onChange={setUsername} />
            <TextInput placeholder='password' style={styles.input} value={password} onChange={setPassword} />

            <Button title='Login' onPress={handleLogin} />
            <Button title='Go to Home' onPress={() => navigation.navigate("Home")} />

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})