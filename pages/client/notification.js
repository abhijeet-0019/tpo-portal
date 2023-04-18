import * as React from 'react';
import RowNotificaion from '../components/RowNotification';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

export default function CollapsibleTable({notifications}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {notifications.map((notification) => (
            <RowNotificaion key={notification.id} notification={notification} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:5000/notification');
    const notifications = await response.json();
    console.log(notifications)
    return { props: { notifications } };
}