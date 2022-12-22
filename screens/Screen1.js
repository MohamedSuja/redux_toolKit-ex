import { View, Text, Button, StatusBar } from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slice/counterSlice";
import { Switch } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const Screen1 = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const storeData = async (value) => {
    // const jsonValue = JSON.stringify(value)

    await AsyncStorage.setItem("switch_value", value ? "on" : "off");
    setIsSwitchOn(value);
  };

  const getData = async () => {
    const value = await AsyncStorage.getItem("switch_value");
    value === "on" ? setIsSwitchOn(true) : null;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Text>Total Count :{count}</Text>
      <Button title="Increment" onPress={() => dispatch(decrement())} />
      <Button title="Screen 2" onPress={() => navigation.navigate("Screen2")} />
      <Text>Async Storage</Text>
      <Switch value={isSwitchOn} onValueChange={(val) => storeData(val)} />
    </View>
  );
};

export default Screen1;
