import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import { useSelector } from 'react-redux'

const Cart = ({ goToDetail }) => {
    const cartNumber = useSelector(state => state.cart.value)
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button title={`${cartNumber}`} onPress={goToDetail} style={styles.button} />
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        // display: "flex",
        // justifyContent: 'flex-end',
        // width: 200,
        marginVertical: 10,
        marginHorizontal: 20
    },
    button: {
        // display: "flex",
        width: 100
    }
})