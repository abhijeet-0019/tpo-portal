import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import RowFAQ from '../components/RowFAQ';
import Header from '../components/Header';

import useAPIData from '../../apiConfig/useAPIData'
import { withAuth } from '../../apiConfig/withAuth';

export default function FAQTable() {
    const { getItems } = useAPIData();
    const [faqs, setFaqs] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const response = await getItems('TPO_FAQ', null, null, null, null, null, null, true);
            setFaqs(response.data)
            console.log(response.data);
        }
        fetchData();
    }, []);

    return (
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
    );
}

// export async function getServerSideProps() {
//     const { getItems } = useAPIData();
//     const response = await getItems('TPO_FAQ', null, null, null, null, null, null, true);
//     const faqs = response.data;
//     console.log(faqs);
//     return { props: { faqs } };
// }