import { getDatabase, ref, set, onValue, push, get } from "firebase/database"
import { database } from "../Utils/firebase-Config";

//Chat
export const UpdateChat = (data) => {
    var db_Chat = ref(database, 'Chat/');
    db_Chat = ref(database, 'Chat/');
    var Chat = {
        line1: data.line1,
        line2: data.line2,
        signature: data.signature,
        type: data.type,
        notification: data.notification,
        Timestamp: Date.now() / 1000
    };
    set(db_Chat, Chat)
};
export const GetData = () => {
    var temp = []
    const Ref = ref(database, 'Type/');
    var returnArr = [];
    onValue(Ref, (snapshot) => {
        returnArr = [];
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var item = childSnapshot.val();
            returnArr.push(item.name);
        });
        temp = returnArr
    });
    console.log("log: " + temp)
    return temp;
};
export const createType = (data) => {
    var db_Type = ref(database, 'Type/');
    const newReference = push(db_Type);
    db_Type = ref(database, 'Type/' + newReference.key);
    var type = {
        name: data.name,
    };
    set(db_Type, type)
};
//website
export const createweb = (data) => {
    var db_web = ref(database, 'Web/');
    db_web = ref(database, 'Web/');

    set(db_web, data.name)
};
export const updatetime = () => {
    var db_web = ref(database, 'Time/');
    db_web = ref(database, 'Time/');
    set(db_web, Date.now() / 1000)
};
export const createHistory = (data) => {
    var db_History = ref(database, 'History/');
    db_History = ref(database, 'History/');
    const newReference = push(db_History);
    var Data = {
        id: newReference.key,
        line1: data.line1,
        line2: data.line2,
        signature: data.signature,
        type: data.type,
        Timestamp: Date.now()
    };
    set(db_History, Data)
};
export const updatePlay = () => {
    var db_Play = ref(database, 'Play/');
    set(db_Play, Date.now() / 1000)
};
export const updateFullScreen = () => {
    var db_Full = ref(database, 'Full/');
    set(db_Full, Date.now() / 1000)
};
export const updateUp = () => {
    var db_Up = ref(database, 'Up/');
    set(db_Up, Date.now() / 1000)
};
export const updateDown = () => {
    var db_Full = ref(database, 'Down/');
    set(db_Full, Date.now() / 1000)
};
export const updateMute = () => {
    var db_mute = ref(database, 'Mute/');
    set(db_mute, Date.now() / 1000)
};
//Connet
export const UpdateConnet = (data) => {
    var db_Connet = ref(database, 'Connet/');
    db_Connet = ref(database, 'Connet/');
    var connet = {
        ip: data.ip,
        isfull: data.isfull,
        Timestamp: Date.now() / 1000
    };
    set(db_Connet, connet)
};
//sharePC
export const updateSharePC = () => {
    var db_Share = ref(database, 'SharePC/');
    set(db_Share, Date.now() / 1000)
};
export const updateCancelShare = () => {
    var db_Share = ref(database, 'cancelShare/');
    set(db_Share, Date.now() / 1000)
};
export const Geturl = () => {
    const Ref = ref(database, 'url/');

    var temp = ""
    onValue(Ref, (snapshot) => {
        temp = snapshot.val()
    });
    return temp;
};