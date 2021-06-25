import React from 'react'
import { View,Text } from 'react-native'

const Footer = (props) => {
    return (
        <View style={{paddingBottom:20,paddingTop:10,backgroundColor: '#333',}}>
            <Text style={{color:'#fff'}}>        
                {"\t"}Thuộc Bộ Khoa học Công nghệ
                {"\n"}{"\t"}Số giấy phép: 06/GP-BTTTT ngày 03/01/2014
            </Text>
            <Text style={{color:'#fff'}}>
                {"\n"}
                {"\t"}Tổng biên tập: Phạm Hiếu
                {"\n"}{"\t"}Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân,Cầu Giấy,Hà Nội
                {"\n"}{"\t"}Điện thoại: 024 7300 8899 - máy lẻ 4500
            </Text>
        </View>
    )
}

export default Footer