import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { database } from "../Utils/firebase-Config";

export const UpdateChat = (data) => {
    var db_Chat = ref(database, 'Chat/');
    db_Chat = ref(database, 'Chat/');
    var Chat = {
        line1: data.line1,
        line2: data.line2,
        signature: data.signature,
        type: data.type,
        notification: data.notification
        //Timestamp: Date.now()
    };
    set(db_Chat, Chat)
};
export const GetData = () => {
    const Ref = ref(database, 'Type/');
    var returnArr = [];
    onValue(Ref, (snapshot) => {
        returnArr = []
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var item = childSnapshot.val();
            returnArr.push(item.name);
        });
    });
    return returnArr;

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