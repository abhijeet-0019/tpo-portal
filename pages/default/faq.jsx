import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import RowFAQ from '../components/RowFAQ';
import Header from '../components/Header';

import useAPIData from '../../apiConfig/useAPIData'
import Navbar2 from '../components/Navbar2';

import withAuthClient from '../../apiConfig/withAuthClient';

function FAQTable() {
    const { getItems } = useAPIData();
    const [faqs, setFaqs] = React.useState([]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            async function fetchData() {
                const response = await getItems('TPO_FAQ', null, null, null, null, null, null, true);
                setFaqs(response.data);
            }
            fetchData();
        }
    }, []);

    return (
        <Navbar2 loginStatus={false} userType={''}>
            <TableContainer component={Paper}>
                <Header tabname={"FAQ"} />
                <Table aria-label="collapsible table">
                    <TableBody>
                        {faqs.map((faq) => (
                            <RowFAQ key={faq.id} faq={faq} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Navbar2>
    );
}
export default withAuthClient(FAQTable);
