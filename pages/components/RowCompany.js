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
import Switch from '@mui/material/Switch';

export default function RowCompany(props) {
    const { company, admin } = props;
    const [open, setOpen] = React.useState(false);
    const [applyEnabled, setApplyEnabled] = React.useState(false);

    const handleApplyToggle = () => {
        setApplyEnabled(!applyEnabled);
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
                        <Box sx={{ margin: 6 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 2,
                                }}
                            >
                                <Typography variant="subtitle1">Form Status (ON/OFF)</Typography>
                                <Switch checked={applyEnabled} onChange={handleApplyToggle} />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={!applyEnabled}
                                    onClick={() => alert('Apply button clicked!')}
                                >
                                    Apply Now
                                </Button>
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
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                                <Button variant="contained" color="primary">
                                    Show List of Applied Students
                                </Button>
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}