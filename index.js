import { NativeModules, Platform } from "react-native";

var RNImmediatePhoneCall;

if (Platform.OS === "android") {
  RNImmediatePhoneCall = {
    immediatePhoneCall: function(
      number,
      contactId,
      userId,
      personId,
      propertyId,
      demandId
    ) {
      if (typeof contactId === "undefined") {
        contactId = -1;
      }

      if (typeof userId === "undefined") {
        userId = -1;
      }

      if (typeof personId === "undefined") {
        personId = -1;
      }

      if (typeof propertyId === "undefined") {
        propertyId = -1;
      }

      if (typeof demandId === "undefined") {
        demandId = -1;
      }

      NativeModules.RNImmediatePhoneCall.immediatePhoneCall(
        number,
        contactId,
        userId,
        personId,
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
