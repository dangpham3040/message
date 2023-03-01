import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { database } from "../Utils/firebase-Config";
var today = Date.now()

export const UpdateChat = (data) => {
   
    console.log(today/1000)
    var db_Chat = ref(database, 'Chat/');
    db_Chat = ref(database, 'Chat/');
    var Chat = {
        line1: data.line1,
        line2: data.line2,
        signature: data.signature,
        type: data.type,
        notification: data.notification,
        Timestamp: today/1000
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
export const createweb = (data) => {
    var db_web = ref(database, 'Web/');
    db_web = ref(database, 'Web/');

    set(db_web, data.name)
};
export const updatetime = () => {
    var db_web = ref(database, 'Time/');
    db_web = ref(database, 'Time/');
    const newReference = push(db_web);
    set(db_web, today/1000)
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
    db_Play = ref(database, 'Play/');
    const newReference = push(db_Play);
    set(db_Play, newReference + 1)
};
export const updateFullScreen = () => {
    var db_Full = ref(database, 'Full/');
    db_Full = ref(database, 'Full/');
    const newReference = push(db_Full);
    set(db_Full, newReference + 1)
};
export const updateUp = () => {
    var db_Up = ref(database, 'Up/');
    db_Up = ref(database, 'Up/');
    const newReference = push(db_Up);
    set(db_Up, newReference + 1)
};
export const updateDown = () => {
    var db_Full = ref(database, 'Down/');
    db_Full = ref(database, 'Down/');
    const newReference = push(db_Full);
    set(db_Full, newReference + 1)
};
export const updateMute = () => {
    var db_mute = ref(database, 'Mute/');
    db_mute = ref(database, 'Mute/');
    const newReference = push(db_mute);
    set(db_mute, newReference + 1)
};
