import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RowNotification(props) {
  const { notification, admin,  onDeleteNotification } = props;
  const [open, setOpen] = React.useState(false);

  const handleDelete = () => {
    onDeleteNotification(notification.id);
  };

  return (
    <React.Fragment>
      <TableRow key={notification.id} sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {notification.company}
        </TableCell>
        <TableCell align="right">{notification.batch}</TableCell>
        <TableCell align="right">{notification.subHeading}</TableCell>
        {admin ? (
          <TableCell>
            <IconButton
              size="small"
              onClick={handleDelete}
            >
              <DeleteIcon />
            </IconButton>
          </TableCell>) : (<div></div>)
        }
      </TableRow>
      <TableRow key={notification.content}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {notification.content.split('\n').map(c => (
                  <li dangerouslySetInnerHTML={{ __html: c.replace(/\n/g, '<br>') }} />
                ))}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
