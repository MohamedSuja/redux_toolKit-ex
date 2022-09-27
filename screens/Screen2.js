import { View, Text, Button, ActivityIndicator } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/slice/dataSlice";
import { getEmployees } from "../redux/slice/employeesAPI";
import { fetchEmployees } from "../redux/slice/employeesSlice";

const Screen2 = () => {
  const data = useSelector((state) => state.data);
  const { employees, loading } = useSelector((state) => state.employees);
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
        title="refresh"
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
      {loading !== "idle" ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        employees !== undefined &&
        employees.map((employee) => (
          <View key={employee.id}>
            <Text>Employee_id : {employee.id}</Text>
            <Text>Employee Name : {employee.employee_name}</Text>
            <Text>Employee Salary : {employee.employee_salary}</Text>
            <Text>Employee Age : {employee.employee_age}</Text>
          </View>
        ))
      )}
    </View>
  );
};

export default Screen2;
