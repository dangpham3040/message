import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, Clipboard } from 'react-native';
import { Configuration, OpenAIApi } from 'openai'
import { useDispatch, useSelector } from 'react-redux';
// require('dotenv').config({ debug: true })
//styles
import { styles } from './styles';
import { common } from '../../Utils/common_styles';
import { OPENAI_API_KEY } from '../../Utils/api';
import { ADD_MESSAGE } from '../../Redux/type';
// require('dotenv').config();


export default function App(props) {
    const [message, setMessage] = useState('');
    // const [messages, setMessages] = useState([]);
    const flatListRef = useRef(null);

    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages);
    const configuration = new Configuration({
        apiKey: OPENAI_API_KEY,

    });
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const openai = new OpenAIApi(configuration);

    const getAireply = async () => {
        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: message,
                max_tokens: 200,
                temperature: 0.2,
            });

            var answer = completion.data.choices[0].text.trim()
            // console.log(answer)
            // setMessages([...messages, { message: answer, sent: false }]);

            console.log(answer);
            const timestamp = new Date().getTime();
            const newMessage = { message: answer, sent: false, timestamp };
            // setMessages(prevMessages => [...prevMessages, newMessage]);
            dispatch({ type: ADD_MESSAGE, payload: newMessage });
            flatListRef.current.scrollToEnd({ animated: true });
        } catch (error) {
            if (error.response) {
                console.log("status: " + error.response.status);
                console.log("data: " + error.response.data);
            } else {
                console.log("message: " + error.message);
            }
        }
    }

    const handleSend = () => {
        if (message != "") {
            // setMessages([...messages, { message, sent: true }]);
            const timestamp = new Date().getTime();
            const newMessage = { message: message, sent: true, timestamp };
            // setMessages(prevMessages => [...prevMessages, newMessage]);
            dispatch({ type: ADD_MESSAGE, payload: newMessage });
            setMessage('');
            getAireply();
            flatListRef.current.scrollToEnd({ animated: true });
        }
    };
    const handleInputFocus = () => {
        flatListRef.current.scrollToEnd({ animated: true });
    };
    const handleLongPress = async (message) => {
        Clipboard.setString(message);

    }
    useEffect(() => {
        console.log(messages)
        flatListRef.current.scrollToEnd({ animated: true });
    }, [messages])
    return (
        <View style={[common.full, styles.container]}>
            <View style={styles.chatcontainer}>
                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={(item, index) => index.toString()}

                    renderItem={({ item }) => (
                        <TouchableOpacity onLongPress={() => handleLongPress(item.message)}>
                            <View style={[styles.bubble, item.sent ? styles.sentBubble : styles.receivedBubble]}>
                                <Text style={styles.messageText}>{item.message}</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={(setMessage)}
                    placeholder="Type your message..."
                    onFocus={handleInputFocus}
                    multiline={true}
                    placeholderTextColor="#000"
                />
                <Button title="Send" style={styles.sendButtonText} onPress={handleSend} color="#7200eb" />
            </View>
        </View>
    );
};




