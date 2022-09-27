import { View, Text, Button, StatusBar } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slice/counterSlice";

const Screen1 = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Text>Total Count :{count}</Text>
      <Button title="Increment" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default Screen1;
