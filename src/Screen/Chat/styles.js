import { BackHandler, Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';
import { Fonts } from '../../Utils/Fonts';
import { common } from '../../Utils/common_styles';
export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'stretch',
   
    },

    chatcontainer: {
        flex: 2
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        borderWidth: 0,
        borderRadius: 20,
        padding: 10,
        backgroundColor: 'lightgray',
        marginRight: 10,
        color:"#000"
    },
    sendButton: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#007aff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
      
    },
    bubble: {
        maxWidth: '80%',
        marginVertical: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
    },
    sentBubble: {
        alignSelf: 'flex-end',
        backgroundColor: '#7200eb',
    },
    receivedBubble: {
        alignSelf: 'flex-start',
        backgroundColor: '#212121',
    },
    messageText: {
        fontSize: 16,
        color: '#fff',
    },
})