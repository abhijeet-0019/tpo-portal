import * as React from 'react';
import RowNotification from '../components/RowNotification';
import Header from '../components/Header';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import Navbar2 from '../components/Navbar2';

function NotificationTable({ notifications }) {
  return (
    <Navbar2 loginStatus={true} userType={'applicant'}>
      <TableContainer component={Paper}>
        <Header tabname={'NOTIFICATIONS'} />
        <Table aria-label="collapsible table">
          <TableBody>
            {notifications.map((notification) => (
              <RowNotification key={notification.id} notification={notification} admin={false} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Navbar2>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:5000/notification');
  const notifications = await response.json();
  // console.log(notifications);
  return { props: { notifications } };
}

// render the component only on the client-side
export default function ClientNotificationTable(props) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <NotificationTable {...props} /> : null;
}