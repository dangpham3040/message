/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,

} from 'react-native';
//lib
import FontAwesome from 'react-native-vector-icons/Entypo';
import FontAwesomeicon from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-clipboard/clipboard';
//style
import { styles } from './styles';
import { common } from '../../Utils/common_styles';
//Components
import Input from '../../Components/Textinput'
import { useState } from 'react';
import WebView from 'react-native-webview';
import { createweb, updateDown, updateFullScreen, updateMute } from '../../Model/Chat';
import { updatetime } from '../../Model/Chat';
import { updatePlay } from '../../Model/Chat';
import { updateUp } from '../../Model/Chat';


export default function App(props) {
  const [Url, setUrl] = useState("")
  const [_onNavigationStateChange, _set_onNavigationStateChange] = useState("")
  const check = () => {
    if (isValidUrl(Url)) {
      createweb({
        name: Url
      })
      updatetime()
    }
  }
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    return !!urlPattern.test(urlString);
  }
  const LoadingIndicatorView = () => {
    return <ActivityIndicator color='#009b88' size='large' style={{ marginBottom: 200 }} />
  }
  return (
    <View style={common.full} >
      <WebView
        source={isValidUrl(Url) ? { uri: Url } : { uri: "https://www.youtube.com/" }}
        onNavigationStateChange={(x) => _set_onNavigationStateChange(x.url)}
        renderLoading={() => LoadingIndicatorView()}
        startInLoadingState={true}
      />

      <View style={styles.view_control}>
        <View style={styles.view_button_warp}>
          <TouchableOpacity style={styles.view_play} onPress={() => { updatePlay() }}>
            <FontAwesome name={'controller-play'} color={'#fff'} size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.view_copy} onPress={() => { Clipboard.setString(_onNavigationStateChange) }}>
            <FontAwesomeicon name={'content-copy'} color={'#fff'} size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.view_button_warp}>
          <TouchableOpacity style={styles.view_button} onPress={() => { updateFullScreen() }}>
            <FontAwesome name={'resize-full-screen'} color={'#fff'} size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.view_button} onPress={() => { updateMute() }}>
            <FontAwesomeicon name={'volume-mute'} color={'#fff'} size={20} />
          </TouchableOpacity>
        </View>


        <View style={styles.view_button_warp}>
          <TouchableOpacity style={styles.view_button} onPress={() => { updateUp() }}>
            <FontAwesomeicon name={'add-circle-outline'} color={'#fff'} size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.view_button} onPress={() => { updateDown() }}>
            <FontAwesomeicon name={'remove-circle-outline'} color={'#fff'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
     
        <View style={styles.view_input_}>
          <Input
            text={"Url..."}
            send={(e) => setUrl(e)}
            value={Url}
            style={{width: "75%",}}
          />
          <TouchableOpacity style={styles.view_clear} onPress={() => {setUrl("")}}>
            <FontAwesomeicon name={'arrow-left'} color={'#fff'} size={40} />
          </TouchableOpacity>
        </View>
     
      <TouchableOpacity style={styles.view_save} onPress={() => check()}>
        <Text style={styles.textsave}>Go</Text>
      </TouchableOpacity>
    </View>
  );
};


