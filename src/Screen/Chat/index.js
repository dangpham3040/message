import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';
import { Configuration, OpenAIApi } from 'openai'
// require('dotenv').config({ debug: true })
//styles
import { styles } from './styles';
import { common } from '../../Utils/common_styles';
import { OPENAI_API_KEY } from '../../Utils/api';
// require('dotenv').config();

export default function App(props) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const flatListRef = useRef(null);
  
    const [reference, setReference] = useState(null)
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
            setMessages(prevMessages => [...prevMessages, newMessage]);
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
            setMessages(prevMessages => [...prevMessages, newMessage]);
            setMessage('');
            getAireply();
            flatListRef.current.scrollToEnd({ animated: true });
        }
    };
    const handleInputFocus = () => {
        console.log('Input is focused');
        flatListRef.current.scrollToEnd({ animated: true });
    };
    useEffect(() => {
        console.log(process.env)
        flatListRef.current.scrollToEnd({ animated: true });
    }, [messages])
    return (
        <View style={[ common.full,styles.container]}>
            <View style={styles.chatcontainer}>
                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={(item, index) => index.toString()}

                    renderItem={({ item }) => (
                        <View style={[styles.bubble, item.sent ? styles.sentBubble : styles.receivedBubble]}>
                            <Text style={styles.messageText}>{item.message}</Text>
                        </View>
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
                />
                <Button title="Send" style={styles.sendButtonText} onPress={handleSend} color="#7200eb"/>
            </View>
        </View>
    );
};




