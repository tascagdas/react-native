import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Toast from 'react-native-toast-message'

const loginSchema = Yup.object().shape({
    username: Yup.string().required("Kullanıcı adı boş bırakılamaz.").min(4, "kullanıcı adı çok kısa").max(20, "kullanıcı adı çok uzun."),

    password: Yup.string().required("şifre boş bırakılamaz").min(4, "şifre 4 karakterden kısa olamaz").max(20, "şifre 20 karakterden uzun olamaz.")

})

const LoginFormik = ({ navigation }) => {


    const handleLogin = async (values) => {
        console.log("handle login çalıştı")
        try {
            await axios.post("https://dummyjson.com/auth/login", values).then(res => {
                if (res.status === 200) {
                    navigation.navigate('Home')
                    console.log(" denememeee")
                    Toast.show({
                        type: "success",
                        text1: "Başarılı bir şekilde oturum açtınız."
                    })
                }
            })
        } catch (error) {
            console.log(error)
            if (error.response) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })
            }
        }
    }

    return (
        <View>

            <Formik
                validationSchema={loginSchema} initialValues={{ username: "kminchelle", password: "0lelplR" }} onSubmit={(values) => handleLogin(values)} >
                {({ handleChange, values, handleSubmit, handleBlur, errors, touched }) => (
                    <>
                        <TextInput placeholder='username'
                            style={styles.input}
                            value={values.username}
                            onChange={handleChange("username")}
                            onBlur={handleBlur('username')}
                        />
                        {errors.username && touched.username ? <Text style={styles.errorText} >{errors.username}</Text> : null}

                        

                        <TextInput placeholder='password'
                            secureTextEntry={true}
                            style={styles.input} value={values.password}
                            onChange={handleChange("password")}
                            onBlur={handleBlur('password')}
                        />
                        {errors.password && touched.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

                        

                        
                        <Button title='Login' onPress={handleSubmit} />

                    </>
                )}

            </Formik>

            <Button title='Go to Home' onPress={() => navigation.navigate("Home")} />

        </View>
    )
}

export default LoginFormik

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    errorText: {
        color: "red",
        paddingLeft: 10
    }
})