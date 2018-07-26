import { NativeModules } from "react-native";

var RNImmediatePhoneCall = {
  immediatePhoneCall: function(number, contactId) {
    NativeModules.RNImmediatePhoneCall.immediatePhoneCall(number, contactId);
  }
};

export default RNImmediatePhoneCall;
