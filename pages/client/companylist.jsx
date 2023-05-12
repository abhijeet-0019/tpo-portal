import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RowCompany from '../components/RowCompany';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Navbar2 from '../components/Navbar2';

import withAuthClient from '../../apiConfig/withAuthClient';

import useAPIData from '../../apiConfig/useAPIData';

import TableRow from '@mui/material/TableRow';
// Add the missing import
import TableCell from '@mui/material/TableCell';

function CompanyTable() {
  const [companies, setCompanies] = useState([]);

  const { getItems } = useAPIData();

  useEffect(() => {
    // Fetch companies from API
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await getItems('TPO_Drive', null, null, null, null, null, null, true);
      const data = response.data;
      console.log("data -> ", data);
      setCompanies(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Navbar2 loginStatus={true} userType={"admin"}>
      <TableContainer component={Paper}>
        <Header tabname={"COMPANIES"} />
        <Table aria-label="collapsible table">
          <TableBody>
            {companies.length > 0 ? (
              companies.map((company) => (
                <RowCompany key={company.id} company={company} admin={false} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>Loading...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Navbar2>
  );
}
export default withAuthClient(CompanyTable);