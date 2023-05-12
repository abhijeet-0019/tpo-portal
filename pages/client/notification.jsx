import * as React from 'react';
// import AddNotification from '../components/AddNotification';
import RowNotification from '../components/RowNotification';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import Navbar2 from '../components/Navbar2';

import withAuthClient from '../../apiConfig/withAuthClient';
import useAPIData from '../../apiConfig/useAPIData';

export default function notification() {
    const {getItems} = useAPIData();
    const [notificationArray, setNotifications] = React.useState([]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            async function fetchData() {
                const response = await getItems('TPO_NOTIFICATION', null, null, null, null, null, null, true);
                // console.log(response.data)
                setNotifications(response.data);
            }
            fetchData();
        }
    }, []);
    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const res1 = await getItems('TPO_NOTIFICATION', null, null, null, null, null, null, true);
            const notificationsData = res1.data;

            // Extract company details for each notification
            const notificationPromises = notificationsData.map(async (notification) => {
              const companyId = notification.drive_id;
              // Fetch company details using company ID
              const companyData = await getItems('TPO_Drive', null, null, null, null, null, null, true);
              const which_drive = companyData.data.find((item) => item.id === companyId);
              const company_name = which_drive.Name;
              // Append company name 
              return { ...notification, company_name: company_name };
            });
    
            const notificationsWithCompany = await Promise.all(notificationPromises);
            setNotifications(notificationsWithCompany);
          } catch (error) {
            console.log('Error fetching notifications:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <Navbar2 loginStatus={true} userType={'applicant'}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

                {/*<AddNotification />*/}
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableBody>
                            {notificationArray.map((notification) => (
                                <RowNotification key={notification.id} notification={notification} admin={false} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Navbar2>
    );
}