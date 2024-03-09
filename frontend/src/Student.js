import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
//import { Search } from './components /Search';
function Student() {
  const [students, setStudents] = useState([]);
  const [filterusers, setFilterusers] = useState([]);
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {setStudents(res.data); return res.data;})
      .then((data) => setFilterusers(data))
      .catch((err) => console.log(err));
  }, []);

  // Search Filter Function
  const handleSearchSubmit = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredUsers = students.filter(
      (student) =>
       student?.Name && student.Name.toLowerCase().includes(searchText) ||
       student?.City && student.City.toLowerCase().includes(searchText)
    );
    setFilterusers(filteredUsers);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.values);
  };


  return (
    <div className="container">
      <h3>Employee Table</h3>
      <div className="input-search">
        <input type="search" onChange={handleSearchSubmit} />
        <select onChange={handleOrderChange}>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>

        <button className="btn">search</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {filterusers &&
            filterusers.map((data, i) => (
              <tr key={i}>
                <td>{data.Id}</td>
                <td>{data.Name}</td>
                <td>{data.Age}</td>
                <td>{data.City}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
