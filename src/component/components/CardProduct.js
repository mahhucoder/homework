import React from 'react'
import {View,Text,Image, StyleSheet} from 'react-native'

function CardProduct(props) {

    const { product } = props

    return (
        <View style={styles.cardProduct}>
                <View>
                    <Text style={styles.titleProduct}>{product.name}</Text>
                    <Text style={{opacity:0.6}}>{product.description}</Text>
                </View>
            <Image style={{width:20,height:20,marginTop:5,marginRight:5,borderRadius:5}} source={{uri:product.urlImg}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    cardProduct:{
        display:'flex',
        flexDirection:'row',
        borderColor:'#333',
        borderWidth:1,
        borderRadius:3,
        marginHorizontal:0,
        width:'47%',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom:6
    },
    titleProduct:{
        fontSize:16,
        fontWeight:"700"
    }
})

export default CardProduct