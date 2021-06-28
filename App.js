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
import SearchPopular from './src/component/SearchPopular'


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
