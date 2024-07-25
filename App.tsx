/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import {BannerView} from 'react-native-fbads';

import {Settings} from 'react-native-fbsdk-next';
Settings.setAppID('1012271243832481');
Settings.initializeSDK();

function App(): React.JSX.Element {
  const [loadAd, setLoadAd] = useState(true);

  useEffect(() => {
    if (loadAd) {
      const timer = setTimeout(() => {
        setLoadAd(true);
      }, 60000); // Retry loading ad after 60 seconds if it fails
    }
  }, []);

  const handleAdError = err => {
    console.log('Ad error:', err?.nativeEvent);
    setLoadAd(false);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      {/* {loadAd ? ( */}
      <BannerView
        placementId="1012271243832481_1012275200498752"
        type="standard"
        onPress={() => console.log('click')}
        onLoad={() => console.log('loaded')}
        onError={handleAdError}
      />
      {/* ) : (
        <Text>Ad failed to load. Retrying...</Text>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
