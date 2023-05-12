import * as React from 'react';
import UploadResume from './UploadResume';
import ApplicationPreview from './ApplicationPreview';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';

export default function RowCompany(props) {
    const { company, admin } = props;
    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const [openResumeSection, setOpenResumeSection] = React.useState(false);

    // students details preview section
    const handleClickOpen = (scrollType) => () => {
        setOpenDialog(true);
        setScroll(scrollType);
        handleCloseResumeSection();
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSubmit = () => {
        setOpenDialog(false);
        sessionStorage.setItem('Applied', true);
        alert("Applied Successfully")
    }

    // resume dialog box
    const handleClickOpenResumeSection = () => {
        setOpenResumeSection(true);
    };
    const handleCloseResumeSection = () => {
        setOpenResumeSection(false);
    };

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
                    {company.Name}
                </TableCell>
                <TableCell component="th" scope="row">
                    {company.RolesOffered}
                </TableCell>
                <TableCell component="th" scope="row">
                    {company.DriveStatus}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ marginTop: 2, marginLeft: 6, marginRight: 6, marginBottom: 6 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 2,
                                }}
                            >

                                {!admin && <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={company.DriveStatus != 'Upcoming' || sessionStorage.getItem('Applied')}
                                    onClick={handleClickOpenResumeSection}
                                >
                                    Apply
                                </Button>
                                }
                                {openResumeSection && <UploadResume onClose={handleCloseResumeSection} onClick={handleClickOpen('paper')} />}

                                {openDialog && <ApplicationPreview onClose={handleCloseDialog} onClick={handleSubmit} openDialog={openDialog} scroll="paper" />}
                            </Box>
                            <Typography variant="h6" gutterBottom component="div">
                                {company && company.Description
                                    ? company.Description.split('\n').map((c, index) => (
                                        <li
                                            key={index}
                                            dangerouslySetInnerHTML={{
                                                __html: c.replace(/\n/g, '<br>'),
                                            }}
                                        />
                                    ))
                                    : ''}
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}