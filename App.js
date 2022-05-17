import React, { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();


export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: '418951792967-ifbmpnb1f4enacn6ou022ohu949t4f1f.apps.googleusercontent.com',
    expoClientId: '418951792967-6uhs2ackdacf65g8kra86c3jhmeojrf7.apps.googleusercontent.com',
    androidClientId: '418951792967-ifbmpnb1f4enacn6ou022ohu949t4f1f.apps.googleusercontent.com',
    iosClientId: '418951792967-ifbmpnb1f4enacn6ou022ohu949t4f1f.apps.googleusercontent.com',
  });

  const [loggedIn, setLoggedIn] = useState("");

  useEffect (
    () => {
      if(response?.type==='success'){
        const { authentication, type } = response;
        setLoggedIn(type);
      }
    }, [response]
  )

  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }} 
      />
      <Text>{loggedIn === "success" ? "Logged In" : "Logged Out"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
