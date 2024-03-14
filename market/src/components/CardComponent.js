import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'

const CardComponent = ({ item }) => {
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
                <Button title='Add to Cart' onPress={null} />
            </Card>
        </>

    )
}

export default CardComponent

const styles = StyleSheet.create({})