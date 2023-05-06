import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StudentDetailsTable = ({ student }) => {
  const { STUDENT_ID, EMAIL_ADDRESS, NAME, BRANCH_ID, DOB, MOBILE_NO, ROLL_NO, 
          '10_%': tenPercentage, '10_BOARD': tenBoard, '10_PASSING_YR': tenPassingYear, 
          '12_%': twelvePercentage, '12_BOARD': twelveBoard, '12_SUBJECT': twelveSubject, '12_YEAR_OF_PASSING': twelveYearOfPassing, 
          GRA_AD_YR, GRA_PASS_YR, 'BE_%': bePercentage, DEAD_KT, ACTIVE_KT, RESUME } = student;

  const studentDetails = [
    { label: 'Student ID', value: STUDENT_ID },
    { label: 'Email Address', value: EMAIL_ADDRESS },
    { label: 'Name', value: NAME },
    { label: 'Branch ID', value: BRANCH_ID },
    { label: 'Date of Birth', value: DOB },
    { label: 'Mobile Number', value: MOBILE_NO },
    { label: 'Roll Number', value: ROLL_NO },
    { label: '10th Percentage', value: tenPercentage },
    { label: '10th Board', value: tenBoard },
    { label: '10th Passing Year', value: tenPassingYear },
    { label: '12th Percentage', value: twelvePercentage },
    { label: '12th Board', value: twelveBoard },
    { label: '12th Subject', value: twelveSubject },
    { label: '12th Year of Passing', value: twelveYearOfPassing },
    { label: 'Graduation Admission Year', value: GRA_AD_YR },
    { label: 'Graduation Passing Year', value: GRA_PASS_YR },
    { label: 'BE Percentage', value: bePercentage },
    { label: 'Dead KT', value: DEAD_KT },
    { label: 'Active KT', value: ACTIVE_KT },
    { label: 'Resume', value: RESUME },
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