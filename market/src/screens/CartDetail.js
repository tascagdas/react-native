import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

const CartDetail = () => {
    const products = useSelector(state => state.cart.products)
    return (
        <View>
            <FlatList data={products} renderItem={({ item }) => <CartItem item={item} />} />
            <Button title='Clear Cart' onPress={null} color={'red'} />
        </View>
    )
}

export default CartDetail

const styles = StyleSheet.create({})