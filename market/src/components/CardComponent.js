import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../store/slices/cartSlice'

const CardComponent = ({ item }) => {
    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(addtoCart(item))
    }
    return (
        <>
            <Card>
                <Card.Title>{item.title} </Card.Title>
                <Card.Divider />
                <Card.Image
                    source={{
                        uri: item.thumbnail
                    }}
                />
                <Text>{item.price}$ </Text>
                <Button title='Add to Cart' onPress={handleCart} />
            </Card>
        </>

    )
}

export default CardComponent

const styles = StyleSheet.create({})