//Components
//-App :
// +state : none
// +props : none
//-Title :
//  +state : none
//  +props : title của trang
//-mainContent
//  +state : none
//  +props : none
//-statisticalCity
// +state : ListCity
// +props : none
//-City: 
// +state :none
// +props :CityInfo
//-CommentBlock
// +state : ListComment
// +props : none
//-Comment:
// +state: none
// +props :CommentInfo

import React from 'react'
import {
  ScrollView, View,Text, StyleSheet
} from 'react-native'
import CommentBlock from './src/component/components/CommentBlock'
import MainContent from './src/component/components/MainContent'
import StatisticalCity from './src/component/components/StatisticalCity'
import Title from './src/component/components/Title'
import Footer from './src/component/components/Footer'
import SearchPopular from './src/component/components/SearchPopular'


const App = () => {

  const title = 'Thêm 47 ca Covid-19, chủ yếu ở TP HCM'

  return (
    <View style={{height: '100%',display: 'flex',justifyContent: 'center'}}>
      <SearchPopular />
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default App
