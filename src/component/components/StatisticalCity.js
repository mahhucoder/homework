import React from 'react'
import { FlatList, View,Image, Text } from 'react-native'
import City from './City'

function StatisticalCity(props) {

    const uri = {
        chart:{   uri:'https://i.imgur.com/tkxVCyT.png' },
        statistics:{ uri:'https://i.imgur.com/pMGUYpi.png'}
    }

    const data = [
        {id:1,cityName: 'Tp HCM', cityContent: 'Ca 13484, 13496-13530 gồm 30 ca là các trường hợp F1 đã được cách ly, 3 ca liên quan đến nhóm truyền giáo Phục hưng, 3 ca đang điều tra dịch tễ. Kết quả xét nghiệm ngày 20/6 họ dương tính.'},
        {id:2,cityName: 'Nghệ An', cityContent: 'Ca 13485 nữ, 85 tuổi, địa chỉ tại TP Vinh, tỉnh Nghệ An; là F1 của 13288, đã được cách ly, kết quả xét nghiệm ngày 21/6 dương tính.'},
        {id:3,cityName: 'Gia Lai', cityContent: 'Ca 13486, nam, 16 tuổi, địa chỉ tại huyện Chư Sê, tỉnh Gia Lai, có tiền sử đi về từ tỉnh Bình Dương, đã được cách ly, kết quả xét nghiệm ngày 21/6 dương tính.'},
        {id:4,cityName: 'Bắc Giang', cityContent: 'Ca 13487-13495 ghi nhận trong khu cách ly và khu vực đã được phong tỏa, liên quan đến công nhân làm tại các khu công nghiệp. Kết quả xét nghiệm ngày 21/6 họ dương tính.'},
    ]

    const renderItem = ({item}) => {

        return (
            <City cityInfo={item} />
        )
    }

    return (
            <View style={{marginTop:10,marginBottom:10,}}>
                <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
                <Image style={{width:400,height:220,marginTop:10,marginBottom:10}} source={uri.chart}/>
                <Text style={{fontSize:16,marginBottom:10,}}>{"\t"}Làn sóng Covid-19 lần thứ tư đã lan ra hầu khắp cả nước. Các chiến sĩ áo trắng đang căng mình chống dịch trong mùa hè oi bức. Để hỗ trợ lực lượng tuyến đầu, các cá nhân và doanh nghiệp có thể đồng hành cùng chương trình "Tiếp sức cho tâm dịch". Xem chi tiết tại đây.</Text>
                <Image style={{width:400,height:100,marginBottom:10}} source={uri.statistics}/>
            </View>
    )
}

export default StatisticalCity