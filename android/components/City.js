import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

function City(props) {

    const city = props.cityInfo

    return (
        <View>
            <Text style={styles.title}>{city.cityName}</Text>
            <Text style={styles.content}>{"\t"}{city.cityContent}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:16,
        fontWeight:"700",
        marginBottom:10,
    },
    content: {
        marginBottom:10,
        fontSize:16,
    }
})

export default City