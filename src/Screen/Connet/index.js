import React, { useState, useEffect, } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/MaterialCommunityIcons';
import NetworkInfo from 'react-native-network-info';
// import {
//   getOrientation,
//   lockToPortrait,
//   lockToLandscape,
// } from "react-native-orientation";
// import RadioGroup from 'react-native-radio-buttons-group';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { getDatabase, ref, onValue } from "firebase/database"
import { database } from '../../Utils/firebase-Config';
//styles
import { styles } from './styles';
import { common } from '../../Utils/common_styles';
import { Colors } from '../../Utils/Color';
//Components
import Input from '../../Components/Textinput'

//Model
import { UpdateConnet, updateSharePC, updateCancelShare } from '../../Model/Model';
import { async } from '@firebase/util';
const delay = ms => new Promise(res => setTimeout(res, ms));
export default function App(props) {
  const [IP, setIP] = useState(true)
  var radio_props = [
    { label: 'No', value: 0 },
    { label: 'Yes', value: 1 }
  ];
  const [choose, setchoose] = useState(0)
  const [isfull, setIsfull] = useState("No")
  const [ipTemp, setIptemp] = useState("")
  const [state, setState] = useState(false)
  const [url, setUrl] = useState('')

  const getIP = async () => {
    // Get Local IP
    const ipAddress = await NetworkInfo.NetworkInfo.getIPAddress();
    // Get IPv4 IP
    const ipv4Address = await NetworkInfo.NetworkInfo.getIPV4Address();
    setIP(ipAddress)
  }
  const changeChoose = (e) => {
    setchoose(e)
    var name = radio_props[e].label
    setIsfull(name)
    console.log(name)
  }
  const check = () => {
    if (isfull == "") {
      return alert("Ip pls")
    }
    UpdateConnet({
      ip: ipTemp,
      isfull: isfull
    })
  }
  const getupdate = () => {
    getIP()
    setIptemp(IP)
  }
  const Geturl = () => {
    const Ref = ref(database, 'url/');
    var temp = ""
    onValue(Ref, (snapshot) => {
      temp = snapshot.val()
      console.log(temp)
      return setUrl(temp)
    });

  };
  const openurl = async () => {
    setState(!state)
    if (url != "") {
      if (!state) {
        updateSharePC()
        await delay(5000)
        // lockToLandscape()
        return Linking.openURL("http://" + url)
      }
      updateCancelShare()
    }
  }
  useEffect(() => {
    Geturl()
    getupdate()
    if (IP == false) {
      getupdate()
    }

  }, [IP])
  return (
    <View style={styles.full}>
      {/* <Image style={styles.imgLogo} source={require('../../Static/Images/logo-removebg-preview.jpg')} ></Image> */}
      <View style={styles.connet_view}>
      <Text style={styles.title}>share Pc screen:</Text>
        <TouchableOpacity style={[state ? styles.view_On : styles.View_Off]} onPress={() => openurl()}>
          <Text style={styles.textsave}>{state ? "On" : "Off"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Full Screen:</Text>

        <RadioForm
          formHorizontal={true}
          animation={true}
          style={styles.radio_view}
        >
          {/* To create radio buttons, loop through your array of options */}
          {
            radio_props.map((obj, i) => (
              <RadioButton labelHorizontal={true} key={i} >
                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={choose === i}
                  onPress={(value) => changeChoose(value)}
                  borderWidth={1}
                  buttonInnerColor={'#000'}
                  buttonOuterColor={choose === i ? '#2196f3' : '#000'}
                  buttonSize={20}
                  buttonOuterSize={20}
                  buttonStyle={{}}
                  buttonWrapStyle={{ marginLeft: 10 }}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(value) => changeChoose(value)}
                  labelStyle={{ fontSize: 15, color: '#000' }}
                  labelWrapStyle={{}}
                />
              </RadioButton>
            ))
          }
        </RadioForm>
        {/* <Text style={styles.title}>Network Name:</Text> */}
        <Text style={styles.title}>IP:</Text>
        <View style={styles.view_input}>
          <Input
            text={"IP..."}
            send={(e) => setIptemp(e)}
            value={ipTemp}
            inputtype={"numeric"}
            // editable={false}
            selectTextOnFocus={false}
          />
          <TouchableOpacity style={styles.reloadicon} onPress={() => getupdate()}>
            <FontAwesome name={'reload'} size={20} color={Colors.primary} />
          </TouchableOpacity>

        </View>
        <TouchableOpacity style={styles.view_save} onPress={() => check()}>
          <Text style={styles.textsave}>Connet</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};


