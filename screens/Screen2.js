import { View, Text, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/slice/dataSlice";
import { getEmployees } from "../redux/slice/employeesAPI";
import { fetchEmployees } from "../redux/slice/employeesSlice";

const Screen2 = () => {
  const data = useSelector((state) => state.data);
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const fetchEmp = async (userId) => {
    try {
      const emp = await dispatch(fetchEmployees());
      console.log(emp);
    } catch (err) {}
  };
  return (
    <View>
      <Button
        title="GetData"
        onPress={() => {
          console.log(data);
        }}
      />
      <Button
        title="dispatch"
        onPress={() => {
          fetchEmp();
        }}
      />
      <Button
        title="employees"
        onPress={() => {
          console.log(employees);
        }}
      />
    </View>
  );
};

export default Screen2;
