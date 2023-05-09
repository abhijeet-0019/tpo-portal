import * as React from 'react';
import Header from '../components/Header';
import RowCompany from '../components/RowCompany';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Navbar2 from '../components/Navbar2';

import withAuthAdmin from '../../apiConfig/withAuthAdmin';

export default function companyTable(props) {
  const { companies } = props;

  return (
    <Navbar2 loginStatus={true} userType={'admin'}>
      <TableContainer component={Paper}>
        <Header tabname={'COMPANIES'} />
        <Table aria-label="collapsible table">
          <TableBody>
            {companies.map((company) => (
              <RowCompany key={company.id} company={company} admin={true} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Navbar2>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:5000/companies');
  const companies = await response.json();
  return {
    props: {
      companies,
    },
  };
}