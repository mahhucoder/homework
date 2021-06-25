import React, { useState } from 'react'
import { View,Text,TextInput, StyleSheet ,Modal, Pressable, FlatList } from 'react-native'
import Comment from './Comment'

function CommentBlock(props) {
    const [ListComments,setListComments] = useState([])
    const [comment,setComment] = useState('')
    const [toggleModal,setToggleModal] = useState(false)
    const [name,setName] = useState('')
    const time = new Date()

    const handlePushComment = () => {

        if(name.trim().length > 0)
        {
            const id = ListComments.length + 1
            const time = new Date()
            const month = time.getMonth() +1
            const formatTime = time.getHours()+':'+time.getMinutes() + ' ' +time.getDate()+'/'+month+'/'+time.getFullYear()
            const newListComments = [
                {
                    id:id,
                    name:name,
                    content:comment,
                    time:formatTime
                },
                ...ListComments
            ]

            setName('')
            setComment('')
            setListComments(newListComments)
        }

        setComment('')
        setToggleModal(false)
    }

    const deleteComment = (index) => {

        const newListComments = ListComments.filter((comment,ind) => ind!==index)

        setListComments(newListComments)
    }

    return (
        <View style={{marginBottom:10}}>
            <Text>Bình luận({ListComments.length})</Text>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder=" Bình luận ..." value={comment} onChangeText={(val)=>setComment(val)} />
                <Pressable style={styles.SendButton} onPress={() => {comment.length >0 ? setToggleModal(true) : undefined}}>
                    <Text>Send</Text>
                </Pressable>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={toggleModal}
                    onRequestClose={() =>{
                        setComment('')
                        setToggleModal(!toggleModal)
                    }}
                >
                    <View style={styles.centeredView}>
                        <TextInput style={{fontSize:16}} value={name} onChangeText={(val) => setName(val)} placeholder=" Enter your name..."/>
                        <View style={{flexDirection:'row',}}>
                            <Pressable style={styles.toggleButtonOk} onPressOut={handlePushComment}>
                                <Text style={{fontSize:16}}>
                                    Ok
                                </Text>
                            </Pressable>

                            <Pressable style={styles.toggleButtonCancel} onPressOut={() => {
                                setName('')
                                setToggleModal(false)}
                            }>
                            <Text style={{fontSize:16}}>
                                Hủy
                            </Text>
                        </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>
                <View style={styles.commentBlock}>
                    {ListComments.length > 0 ? <FlatList data={ListComments} renderItem={({item,index}) => <Comment comment={item} deleteComment={deleteComment} index={index}/>} keyExtractor={(item) =>item.id} /> : undefined}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor:'#fff',
        width:200,
        height:100,
        marginTop:300,
        marginLeft:100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5, 
        borderRadius:5,
    },
    toggleButtonOk: {
        alignItems: "center",
        justifyContent: "center",
        width:40,
        height:30,
        backgroundColor: 'rgb(0, 104, 232)',
        marginRight:5,
        borderRadius:4
    },
    toggleButtonCancel:{
        alignItems: "center",
        justifyContent: "center",
        width:40,
        height:30,
        backgroundColor: 'red',
        marginLeft:5,
        borderRadius:4
    },
    input:{
        flex:1,
    },
    form:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:5,
        borderBottomColor:'#333',
        borderBottomWidth:1,
    },
    SendButton:{
        backgroundColor: 'rgb(84, 200, 229)',
        height:30,
        width:40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
    },
})

export default CommentBlock