import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/MaterialCommunityIcons';
import { getDatabase, ref, onValue } from "firebase/database"
import NetworkInfo from 'react-native-network-info';
// import RadioGroup from 'react-native-radio-buttons-group';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
//styles
import { styles } from './styles';
import { common } from '../../Utils/common_styles';
import { Colors } from '../../Utils/Color';
//Components
import Input from '../../Components/Textinput'

//Model
import { UpdateConnet } from '../../Model/Model';


export default function App(props) {
  const [IP, setIP] = useState(false)
  var radio_props = [
    { label: 'No', value: 0 },
    { label: 'Yes', value: 1 }
  ];
  const [choose, setchoose] = useState(0)
  const [isfull, setIsfull] = useState("No")
  const [ipTemp, setIptemp] = useState("")
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
      ip: IP,
      isfull: isfull
    })
  }
  const getupdate = () => {
    getIP()
    setIptemp(IP)
  }
  useEffect(() => {
    getupdate()
    if (IP == false) {
      getupdate()
    }

  }, [IP])
  return (
    <View style={styles.full}>
      <Image style={styles.imgLogo} source={require('../../Static/Images/logo-removebg-preview.jpg')} ></Image>
      <View style={styles.connet_view}>
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
          <TouchableOpacity style={styles.reloadicon} onPress={() => getupdate(IP)}>
            <FontAwesome name={'reload'} size={20} color={Colors.primary} />
          </TouchableOpacity>

        </View>
        <TouchableOpacity style={styles.view_save} onPress={() => check()}>
          <Text style={styles.textsave}>Save</Text>

        </TouchableOpacity>
      </View>
    </View>

  );
};


