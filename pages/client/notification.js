import * as React from 'react';
import RowNotification from '../components/RowNotification';
import Header from '../components/Header';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

export default function notificationTable({notifications}) {
  return (
    <TableContainer component={Paper}>
    <Header tabname={"NOTIFICATIONS"} />
      <Table aria-label="collapsible table">
        <TableBody>
          {notifications.map((notification) => (
            <RowNotification key={notification.id} notification={notification} admin={false}/>
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