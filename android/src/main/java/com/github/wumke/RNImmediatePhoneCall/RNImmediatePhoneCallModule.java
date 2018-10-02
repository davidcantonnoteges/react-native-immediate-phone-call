package com.github.wumke.RNImmediatePhoneCall;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.util.Log;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class RNImmediatePhoneCallModule extends ReactContextBaseJavaModule {

    ReactApplicationContext reactContext;
    AlarmManager alarmManager;

    public RNImmediatePhoneCallModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        alarmManager = (AlarmManager) reactContext.getSystemService(Context.ALARM_SERVICE);
    }

    @Override
    public String getName() {
        return "RNImmediatePhoneCall";
    }

    @ReactMethod
    public void immediatePhoneCall(String number, Integer contactId, Integer userId, Integer clientId, Integer propertyId, Integer demandId, String v3token, String token) {
        number = Uri.encode(number);
        String url = "tel:" + number;
        Intent intent = new Intent(Intent.ACTION_CALL, Uri.parse(url));

        intent.putExtra("contactId", contactId);
        intent.putExtra("userId", userId);
        intent.putExtra("clientId", clientId);
        intent.putExtra("propertyId", propertyId);
        intent.putExtra("demandId", demandId);
        intent.putExtra("v3token", v3token);
        intent.putExtra("token", token);


        SharedPreferences pref = getReactApplicationContext().getSharedPreferences("MyPref", 0); // 0 - for private mode
        SharedPreferences.Editor editor = pref.edit();
        editor.putInt("contactId", contactId); // Storing integer
        editor.putInt("userId", userId);
        editor.putInt("clientId", clientId);
        editor.putInt("propertyId", propertyId);
        editor.putInt("demandId", demandId);
        editor.putString("v3token", v3token);
        editor.putString("token", token);
        editor.apply(); // commit changes

        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        this.reactContext.startActivity(intent);
    }

    @ReactMethod
    public void saveTokens(String v3token, String token)
    {
        SharedPreferences pref = getReactApplicationContext().getSharedPreferences("MyPref", 0); // 0 - for private mode
        SharedPreferences.Editor editor = pref.edit();
        editor.putString("v3token", v3token);
        editor.putString("token", token);
        editor.apply(); // commit changes
    }
}
