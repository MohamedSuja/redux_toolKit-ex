import axios from "axios";

export async function getEmployees() {
  const url = "http://dummy.restapiexample.com/api/v1/employees";
  const url2 = "https://jsonplaceholder.typicode.com/todos/1";
  try {
    const employeesResponse = await axios.get(url);
    console.log(111111111111, employeesResponse.data.data);
    return employeesResponse.data.data;
  } catch (err) {
    throw err;
  }
}
