import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import RowFAQ from '../components/RowFAQ';
import Header from '../components/Header';

import useAPIData from '../../apiConfig/useAPIData'
import Navbar2 from '../components/Navbar2';

function FAQTable() {

    return (
        <Navbar2 loginStatus={false} userType={''}>
            <TableContainer component={Paper}>
                <Header tabname={"FAQ"} />
                <h1>Please Login First to explore the Web Application</h1>
            </TableContainer>
        </Navbar2>
    );
}
export default FAQTable;
