import { useState, useEffect } from "react";
//import axios from 'axios'
import style from "./studentList.module.css"
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useAPIData from "../../apiConfig/useAPIData";
import React, { PureComponent } from "react";
import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Bar,
} from "recharts";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const data2 = [
  {
    name: "CSE",
    Registered: 180,
    Placed: 130,
  },
  {
    name: "IT",
    Registered: 140,
    Placed: 100,
  },
  {
    name: "Mech",
    Registered: 140,
    Placed: 102,
  },
  {
    name: "Civil",
    Registered: 138,
    Placed: 58,
  },
  {
    name: "ECC",
    Registered: 148,
    Placed: 89,
  },
  {
    name: "EEE",
    Registered: 120,
    Placed: 40,
  },
  {
    name: "Mining",
    Registered: 111,
    Placed: 92,
  },
  {
    name: "ECE",
    Registered:134,
    Placed: 37,
  },
  {
    name: "EE",
    Registered: 60,
    Placed: 39,
  },
  {
    name: "P&I",
    Registered: 84,
    Placed: 85,
  },
];

function StudentList() {
  const { getItems } = useAPIData();
  const classes = useStyles();
  const [students, setStudents] = useState([]);
  const [branchFilter, setBranchFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");


  //BARGRAPH FOR PLACED STUDENTS

  useEffect(() => {
    async function fetchData() {
      const response = await getItems(
        "TPO_students_personal_details",
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        true
      );
      const data = response.data;
      //console.log(data)

      const studentArray = Object.values(data).map((student) => ({
        id: student.id || "",
        name: student.name || "",
        branch: student.branch_id || "",
        company_name: student.company_name || "",
        // salary_per_annum: student.salary_per_annum || '',
        LPA: student.LPA || "",
      }));
      setStudents(studentArray);
      console.log(studentArray);
    }
    fetchData();
  }, []);

  // }, [])

  const filteredStudents = students.filter(
    (student) =>
      student.branch.includes(branchFilter) &&
      student.company_name.includes(companyFilter)
  );

  const handleBranchFilterChange = (event) => {
    setBranchFilter(event.target.value);
  };

  const handleCompanyFilterChange = (event) => {
    setCompanyFilter(event.target.value);
  };

  return (
    <div>
      <div className={style.chart}>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[20, 30]}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="Placed" fill="#8884d8" />
            <Bar dataKey="Registered" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <div>
          <TextField
            label="Filter by branch"
            value={branchFilter}
            onChange={handleBranchFilterChange}
            margin="normal"
          />
          <TextField
            label="Filter by company"
            value={companyFilter}
            onChange={handleCompanyFilterChange}
            margin="normal"
          />
        </div>
        <br />
        <br />

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="placed students table">
            <TableHead>
              <TableRow style={{ backgroundColor: "lightgrey" }}>
                <TableCell>Name</TableCell>
                <TableCell align="right">Company Name</TableCell>
                <TableCell align="right">Branch</TableCell>
                <TableCell align="right">Salary per Annum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell component="th" scope="row">
                    {student.name}
                  </TableCell>
                  <TableCell align="right">{student.company_name}</TableCell>
                  <TableCell align="right">{student.branch}</TableCell>
                  <TableCell align="right">{student.LPA}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* right component
     <div>
     <h1>HIIIIIIIIII</h1>
      </div> */}
    </div>
  );
}

export default StudentList;
