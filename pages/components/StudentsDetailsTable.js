import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StudentDetailsTable = () => {

  const data = {
    id: 1,
    user_created: "edc97c54-effb-45f7-90f3-9ecf4ea05146",
    date_created: "2023-05-05T12:31:08.000Z",
    user_updated: "edc97c54-effb-45f7-90f3-9ecf4ea05146",
    date_updated: "2023-05-12T16:09:04.000Z",
    user_id: "459d9361-b7a1-4dcb-ba69-2c9f237fcc15",
    roll_no: "21UCSE4007",
    branch_id: "CSE",
    percentage_10: 85,
    board_10: "CBSE",
    passing_year_10: 2019,
    percentage_12: 91,
    board_12: "CBSE",
    passing_year_12: 2019,
    current_year: 3,
    grad_year: 2024,
    be_percentage: 82,
    dead_kt: 0,
    active_kt: 0,
    can_apply: 1,
    diploma_college: null,
    percentage_diploma: null,
    diploma_year: null,
    diploma_specialization: null
  }

  const studentDetails = [
    { label: 'ID', value: data.id },
    { label: 'User ID', value: data.user_id },
    { label: 'Roll Number', value: data.roll_no },
    { label: 'Branch ID', value: data.branch_id },
    { label: '10th Percentage', value: data.percentage_10 },
    { label: '10th Board', value: data.board_10 },
    { label: '10th Passing Year', value: data.passing_year_10 },
    { label: '12th Percentage', value: data.percentage_12 },
    { label: '12th Board', value: data.board_12 },
    { label: '12th Passing Year', value: data.passing_year_12 },
    { label: 'Current Year', value: data.current_year },
    { label: 'Graduation Year', value: data.grad_year },
    { label: 'BE Percentage', value: data.be_percentage },
    { label: 'Dead KT', value: data.dead_kt },
    { label: 'Active KT', value: data.active_kt },
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="student details">
        <TableHead>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentDetails.map(({ label, value }) => (
            <TableRow key={label}>
              <TableCell component="th" scope="row">{label}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentDetailsTable;
