import React, { useState } from 'react'
import { View,Text,Image, StyleSheet,Pressable,Alert, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import CardProduct from './CardProduct'

const alert = <Text>X E M T H Ê M</Text>

function SearchPopular(props) {

    const [products,setProducts] = useState([
        {name: 'Tai nghe bluetooth',description: 'Thiết bị cần thiết cá nhân',urlImg:'https://cf.shopee.vn/file/75678f08b50603aa5a931b3fca556870_tn'},
        {name: 'Sneaker',description: 'Đưa bạn tới thành công',urlImg:'https://cf.shopee.vn/file/b05210656b1b3fe7f072b269267a760d_tn'},
        {name: 'Đồng hồ',description: 'Thể hiện bạn là ai',urlImg:'https://cf.shopee.vn/file/090d571b303de01e6431ca76452093c4_tn'},
        {name: 'Áo thun',description: 'Năng động, tươi trẻ',urlImg:'https://cf.shopee.vn/file/cca1938b85207fa58d058ce03dc08cf9_tn'},
    ])

    return (
        <View style={{paddingLeft:4}}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',paddingHorizontal:5,marginBottom:10}}>
                <Text style={{fontSize:18,color:'rgb(249, 128, 72)',fontWeight:"700",textAlign: 'left',flex:1}}>Tìm kiếm phổ biến</Text>
                <Icon name="circle" />
                <Pressable onPressOut={() => Alert.alert('X E M T H Ê M')} style={{borderColor:'rgb(249, 128, 72)',marginRight:6,borderWidth:1,borderRadius:3,height:23,width:70,}}>
                    <Text style={{color:'rgb(249, 128, 72)'}}>
                        Xem thêm
                    </Text>
                </Pressable>
            </View>
            <View style={styles.container}>
                <FlatList data={products} renderItem={({item}) => <CardProduct product={item} keyExtractor={({item,index}) => index}/>}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
    },
})

export default SearchPopular