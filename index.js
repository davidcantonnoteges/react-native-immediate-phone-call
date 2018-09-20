import { NativeModules, Platform } from "react-native";

var RNImmediatePhoneCall;

if (Platform.OS === "android") {
  RNImmediatePhoneCall = {
    immediatePhoneCall: function(
      number,
      contactId,
      userId,
      clientId,
      propertyId,
      demandId
    ) {
      debugger;
      if (typeof contactId === "undefined" || contactId === 0) {
        contactId = -1;
      }

      if (typeof userId === "undefined" || userId === 0) {
        userId = -1;
      }

      if (typeof clientId === "undefined" || clientId === 0) {
        clientId = -1;
      }

      if (typeof propertyId === "undefined" || propertyId === 0) {
        propertyId = -1;
      }

      if (typeof demandId === "undefined" || demandId === 0) {
        demandId = -1;
      }

      NativeModules.RNImmediatePhoneCall.immediatePhoneCall(
        number,
        contactId,
        userId,
        clientId,
        propertyId,
        demandId
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
