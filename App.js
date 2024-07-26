import React from "react";
import { View } from "react-native";
import AdComponent from "./components/AdComponent";
import { AdSettings, BannerView } from "react-native-fbads";
import { NativeAdsManager } from "react-native-fbads";

AdSettings.setLogLevel("debug");
AdSettings.setAdvertiserTrackingEnabled(true);
AdSettings.clearTestDevices();
const adsManager = new NativeAdsManager("1012271243832481_1013866300339642", 1);

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <AdComponent
        adsManager={adsManager}
        adChoicePosition="topLeft"
        expandable={false}
        onAdLoaded={(e) => console.log("-=-=-=-=-=-", e)}
      />
    </View>
  );
};

export default App;
