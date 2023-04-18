import * as React from 'react';
import AddNotification from '../components/AddNotification';
import RowNotification from '../components/RowNotification';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';


export default function notification({ notifications }) {

    const [notificationArray, setNotifications] = React.useState([]);

    React.useEffect(() => {
        setNotifications(notifications);
        console.log(notificationArray, "---------", notifications)
    }, [notifications]);

    const handleDeleteNotification = (notificationId) => {
        fetch(`http://localhost:5000/notification/${notificationId}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log("data successfully deleted");
                setNotifications(prevNotifications => prevNotifications.filter(n => n.id !== notificationId));
                // handle response data
            })
            .catch(error => {
                console.error(error);
                // handle error
            });
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <AddNotification />
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableBody>
                        {notificationArray.map((notification) => (
                            <RowNotification key={notification.id} notification={notification} admin={true} onDeleteNotification={handleDeleteNotification} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:5000/notification');
    const notifications = await response.json();
    console.log(notifications)
    return { props: { notifications } };
}