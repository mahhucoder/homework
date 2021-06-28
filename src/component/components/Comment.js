import React from 'react'
import PropTypes from 'prop-types'
import {View,Text,Image, StyleSheet,Pressable} from 'react-native'

Comment.propTypes = {
    comment: PropTypes.object,
}

function Comment(props) {

    const comment = props.comment
    const index = props.index
    const deleteComment = props.deleteComment
    const api = {
        uri:'https://i.imgur.com/2MopHGl.jpg'
    }

    const handleClickDeleteButton = () => {
        deleteComment(index)
    }

    return (
        <View style={styles.comment}>
            <Image style={styles.avatar} source={api}/>
            <View style={{flex:1}}>
                <Text style={{fontSize:18,fontWeight:"700"}}>{comment.name}</Text>
                <Text>{comment.content}</Text>
                <Text style={{textAlign: 'center',fontSize:10}}>{comment.time}</Text>
            </View>
            <View style={{marginRight:10}}>
                <Pressable onPressOut={handleClickDeleteButton} style={{marginTop:15}}>
                    <Text style={{fontSize:18,fontWeight:"700"}}>🗑</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        marginTop:5,
        marginBottom:5,
        borderRadius:500,
        height:40,
        width:40,
        marginLeft:10,
        marginRight:15,
    },
    comment:{
        flexDirection:'row',
        borderBottomColor:'#333',
        borderBottomWidth:1,
        justifyContent:'space-between'
    }
})

export default Comment