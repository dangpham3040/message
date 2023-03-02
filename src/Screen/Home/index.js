import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import { getDatabase, ref, onValue } from "firebase/database"
import { Switch } from 'react-native-paper';
import publicIP from 'react-native-public-ip';
import NetworkInfo from 'react-native-network-info';
import axios from 'axios';
//Icons
import SeachICon from '../../Icons/Seach'
//styles
import { styles } from './styles';
import { common } from '../../Utils/common_styles';
import { Colors } from '../../Utils/Color';
//Components
import Confirm from '../../Components/Confirm'
import Loader from '../../Components/Loader'
import Input from '../../Components/Textinput'
import Header from '../../Components/Header_Home'
import { Line } from 'react-native-svg';
//Model
import { UpdateChat, createType, createHistory, GetData } from '../../Model/Model';
import { types } from '@babel/core';
import { async } from '@firebase/util';
import { database } from '../../Utils/firebase-Config';
export default function App(props) {
  const [choose, setchoose] = useState(false)
  const [isLoading, SetisLoaing] = useState(true)
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [data, setdata] = useState([])
  const [Type, setType] = useState("")
  const [Line1, setLine1] = useState("")
  const [Line2, setLine2] = useState("")
  const [Signature, setSignature] = useState("< U N K N O W N >")
  var today = new Date();
  let now = today.toLocaleDateString("en-GB")

  const handlclear = () => {
    setLine1("")
    setLine2("")
    setSignature("< U N K N O W N >")
  }
  const check = () => {
    if (Type == "") {
      return alert("pls enter Type info")
    }
    var new_array = []
    data.filter(function (item) {
      new_array.push(item.toUpperCase())
    });
    if (!new_array.includes(Type.toUpperCase())) {
      return createType({ name: Type })
    }
    if (Type == "" || Line1 == "" || Line2 == "") {
      return alert("pls enter full info")
    }
    UpdateChat({
      type: Type,
      line1: Line1,
      line2: Line2,
      signature: Signature,
      notification: isSwitchOn
    })
    createHistory({
      type: Type,
      line1: Line1,
      line2: Line2,
      signature: Signature,
    })
    handlclear()
  }

  const _getData = () => {
    setdata([])
    const Ref = ref(database, 'Type/');
    onValue(Ref, (snapshot) => {
      var returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var key = childSnapshot.key;
        var item = childSnapshot.val();
        returnArr.push(item.name);
      });
      setdata(returnArr)
    });

  };


  const getIP = async () => {
    // Get Local IP
    const ipAddress = await NetworkInfo.NetworkInfo.getIPAddress();
    // Get IPv4 IP
    const ipv4Address = await NetworkInfo.NetworkInfo.getIPV4Address();
   
  }

  useEffect(() => {
    _getData()
    console.log("date: " + now)
    getIP()
    // const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
    //   SetisLoaing(false)
    // }, 1500)
    // return () => clearInterval(intervalId); //This is important'
    if (data.length > 0) {
      SetisLoaing(false)
      console.log(data)
    }
  }, [])
  return (
    <ScrollView style={common.full} >
      <Image style={styles.imgLogo} source={require('../../Static/Images/logo-removebg-preview.jpg')} ></Image>
      <View style={styles.view_Type}>
        <SelectDropdown
          data={data}
          //defaultValueByIndex={0}
          // defaultValue={'Egypt'}
          onSelect={(selectedItem, index) => {
            //console.log(selectedItem, index);
            setType(selectedItem)
          }}
          defaultButtonText={'Select Type'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          selectedRowStyle={styles.dropdown1SelectedRowStyle}
        // search
        // searchInputStyle={styles.dropdown1searchInputStyleStyle}
        // searchPlaceHolder={'Seach Type'}
        // searchPlaceHolderColor={'darkgrey'}
        // renderSearchInputLeftIcon={() => {
        //   return <FontAwesome name={'search'} color={'#444'} size={18} />;
        // }}
        >

        </SelectDropdown>
        <View style={styles.view_switch}>
          <Text style={[styles.text_notification, isSwitchOn ? { color: "green" } : { color: "red" }]}>notification </Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>

      </View>

      <View style={styles.view_input}>
        <Input
          text={"Type..."}
          send={(e) => setType(e)}
          value={Type}
        />
      </View>
      <View style={styles.view_input}>
        <Input
          text={"Title..."}
          send={(e) => setLine1(e)}
          value={Line1}
        />
      </View>
      <View style={styles.view_input}>
        <Input
          text={"context..."}
          send={(e) => setLine2(e)}
          value={Line2}
        />
      </View>
      <View style={styles.view_input}>
        <Input
          text={"signature..."}
          send={(e) => setSignature(e)}
          value={Signature}

        />
      </View>
      <TouchableOpacity style={styles.view_save} onPress={() => check()}>
        <Text style={styles.textsave}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


