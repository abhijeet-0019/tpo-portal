import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';

// studets details preview section
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// resume dialog section
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

export default function RowCompany(props) {
    const { company } = props;
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

    const handleClose = () => {
        setOpenDialog(false);
    };
    const handleSubmit = () => {
        handleClose();
        alert("Applied Successfully")       
    }

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (openDialog) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [openDialog]);


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
                    {company.name}
                </TableCell>
                <TableCell component="th" scope="row">
                    {company.jobProfile}
                </TableCell>
                <TableCell component="th" scope="row">
                    {company.eligibleBranches}
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
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={company.active}
                                    // onClick={() => alert('Apply button clicked!')}
                                    onClick={handleClickOpenResumeSection}
                                >
                                    Apply Now
                                </Button>
                                <BootstrapDialog
                                    onClose={handleCloseResumeSection}
                                    aria-labelledby="customized-dialog-title"
                                    open={openResumeSection}
                                >
                                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseResumeSection}>
                                        Upload Updated Resume
                                    </BootstrapDialogTitle>
                                    <DialogContent dividers>
                                        <Typography gutterBottom>
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                            consectetur ac, vestibulum at eros.
                                        </Typography>
                                        <Typography gutterBottom>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleCloseResumeSection}>
                                            Close
                                        </Button>
                                        <Button autoFocus onClick={handleClickOpen('paper')}>
                                            Next
                                        </Button>
                                    </DialogActions>
                                </BootstrapDialog>

                                <Dialog
                                    open={openDialog}
                                    onClose={handleClose}
                                    scroll={scroll}
                                    aria-labelledby="scroll-dialog-title"
                                    aria-describedby="scroll-dialog-description"
                                ><DialogTitle id="scroll-dialog-title">Application Preview</DialogTitle>
                                    <DialogContent dividers={scroll === 'paper'}>
                                        <DialogContentText
                                            id="scroll-dialog-description"
                                            ref={descriptionElementRef}
                                            tabIndex={-1}
                                        >
                                            {[...new Array(50)]
                                                .map(
                                                    () => `Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                                                )
                                                .join('\n')}
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                        <Button onClick={handleSubmit}>Submit</Button>
                                    </DialogActions>
                                </Dialog>
                            </Box>
                            <Typography variant="h6" gutterBottom component="div">
                                {company.details
                                    .split('\n')
                                    .map((c) => (
                                        <li
                                            dangerouslySetInnerHTML={{
                                                __html: c.replace(/\n/g, '<br>'),
                                            }}
                                        />
                                    ))}
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


// resume dialog section
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
