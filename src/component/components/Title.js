import React from 'react'
import { StyleSheet, Text } from 'react-native'

function Title(props) {

    const { title } = props 

    return (
        <Text style={styles.title}>
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize: 20,
        fontWeight:"700",
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'rgb(84, 200, 229)',
        color:'#fff',
        marginBottom:10,
    }
})

export default Title