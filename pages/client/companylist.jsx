import * as React from 'react';
import Header from '../components/Header';
import RowCompany from '../components/RowCompany';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Navbar2 from '../components/Navbar2';

import withAuthClient from '../../apiConfig/withAuthClient';

function companyTable(props) {
  const { companies, students } = props;
  const student = students[0]

  return (
    <Navbar2 loginStatus={true} userType={'applicant'}>
      <TableContainer component={Paper}>
        <Header tabname={'COMPANIES'} />
        <Table aria-label="collapsible table">
          <TableBody>
            {companies.map((company) => (
              <RowCompany key={company.id} company={company} student={student} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Navbar2>
  );
}
export default withAuthClient(companyTable);


export async function getServerSideProps() {
  const response1 = await fetch('http://localhost:5000/companies');
  const companies = await response1.json();

  const response2 = await fetch('http://localhost:5000/students');
  const students = await response2.json();

  // console.log("---->", students, students[0])
  return {
    props: {
      companies, students
    },
  };
}