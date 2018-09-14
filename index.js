import { NativeModules, Platform } from "react-native";

var RNImmediatePhoneCall;

if (Platform.OS === "android") {
  RNImmediatePhoneCall = {
    immediatePhoneCall: function(number, contactId, userId) {
      NativeModules.RNImmediatePhoneCall.immediatePhoneCall(
        number,
        contactId,
        userId
      );
    }
  };
} else {
  RNImmediatePhoneCall = {
    immediatePhoneCall: function(number) {
      NativeModules.RNImmediatePhoneCall.immediatePhoneCall(number);
    }
  };
}

export default RNImmediatePhoneCall;
