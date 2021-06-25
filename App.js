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
  ScrollView, View
} from 'react-native'
import CommentBlock from './android/components/CommentBlock'
import MainContent from './android/components/MainContent'
import StatisticalCity from './android/components/StatisticalCity'
import Title from './android/components/Title'
import Footer from './android/components/Footer'


const App = () => {

  const title = 'Thêm 47 ca Covid-19, chủ yếu ở TP HCM'

  return (
    <ScrollView>
      <View>
        <Title title={title}/>
        <MainContent />
        <StatisticalCity />
        <CommentBlock />
        <Footer />
      </View>
    </ScrollView>
  )
}

export default App
