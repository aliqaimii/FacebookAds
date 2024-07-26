import React, { Component, createRef } from "react";
import {
  AdIconView,
  AdChoicesView,
  TriggerableView,
  withNativeAd,
  MediaView,
  BannerView,
} from "react-native-fbads";
import {
  Text,
  View,
  Dimensions,
  Alert,
  Linking,
  StyleSheet,
} from "react-native";
const { width } = Dimensions.get("window");

class AdComponent extends Component {
  constructor(props) {
    super(props);

    this.myRef = createRef();
  }

  handlePress = (e) => {
    console.log(e);
    const { nativeAd } = this.props;
    const adLink = "https://" + nativeAd?.socialContext;
    if (adLink) {
      Linking.openURL(adLink).catch((err) =>
        console.error("An error occurred while opening the URL:", err)
      );
    } else {
      Alert.alert("No URL found");
    }
  };
  render() {
    return (
      <View
        style={{
          marginBottom: 20,
          backgroundColor: "white",
          paddingHorizontal: 12,
          paddingVertical: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AdChoicesView expandable={true} style={{}} />
          <Text style={{ marginLeft: 30, color: "black" }}>
            {this?.props?.nativeAd?.sponsoredTranslation}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", marginTop: 5 }}>
            <AdIconView style={{ width: 50, height: 50 }} />
            {/* <MediaView style={{ width: 1, height: 1 }} /> */}
            <View style={{ paddingLeft: 7, flexShrink: 1 }}>
              <Text style={{ color: "black", fontSize: 15, fontWeight: "800" }}>
                {this?.props?.nativeAd?.advertiserName}
              </Text>
              <Text style={{ color: "black", fontSize: 12 }}>
                {this?.props?.nativeAd?.bodyText}
              </Text>
            </View>
          </View>

          <TriggerableView
            style={{
              backgroundColor: "#0295ff",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 15,
              textAlignVertical: "center",
              height: 50,
              borderRadius: 5,
            }}
            onPress={this?.handlePress}
          >
            <Text style={{ fontSize: 12, fontWeight: "800" }}>
              {this.props.nativeAd.callToActionText}
            </Text>
          </TriggerableView>
        </View>
      </View>
    );
  }
}

export default withNativeAd(AdComponent);
