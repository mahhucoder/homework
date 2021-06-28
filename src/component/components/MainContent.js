import React from 'react'
import { View,Text,Image, StyleSheet } from 'react-native'

function MainContent(props) {

    const api = {
        uri:'https://i.imgur.com/1r5auLZ.png'
    }

    return (
        <View>
            <Text style={style.text}>
                {"\t"}Bộ Y tế sáng 22/6 ghi nhận 47 ca dương tính nCoV, gồm tại TP HCM (36), Bắc Giang (9), Nghệ An và Gia Lai một; trong đó 44 ca được phát hiện ở khu cách ly hoặc khu đã được phong tỏa.{"\n"}{"\n"}
                47 ca mới từ số 13484-13530, nâng tổng số ca nhiễm tại Bắc Giang lên 5.466, TP HCM 1.820, Nghệ An 33, Gia Lai 2.{"\n"}{"\n"}
                Tổng số ca nhiễm cộng đồng từ ngày 27/4 đến nay lên 10.258, ghi nhận ở 42 tỉnh thành. Trong đó, Gia Lai xuất hiện ca mới sau hơn 20 ngày không ghi nhận ca nhiễm.{"\n"}{"\n"}
                18 tỉnh gồm Bạc Liêu, Đăk Lăk, Điện Biên, Đồng Tháp, Hải Phòng, Ninh Bình, Quảng Ngãi, Quảng Ninh, Quảng Trị, Sơn La, Tây Ninh, Thái Bình, Thái Nguyên, Thanh Hóa, Thừa Thiên Huế, Tuyên Quang, Vĩnh Phúc, Yên Bái, đã qua 14 ngày không ghi nhận trường hợp mắc mới.{"\n"}{"\n"}
                8 tỉnh gồm Ninh Bình, Quảng Ngãi, Quảng Ninh, Quảng Trị, Sơn La, Thừa Thiên Huế, Tuyên Quang, Yên Bái, đã qua 30 ngày không ghi nhận trường hợp mắc mới.{"\n"}{"\n"}
            </Text>
            <Image style={style.img} source={api}/>
            <Text style={style.text}>Từ 29/4 đến nay đã thực hiện 2.544.659 xét nghiệm cho 5.776.150 lượt người.</Text>
        </View>
    )
}

const style = StyleSheet.create({
    img: {
        height:200,
        width:400,
    },
    text: {
        fontSize:16,
    }
})

export default MainContent