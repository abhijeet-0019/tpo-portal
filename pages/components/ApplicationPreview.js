import * as React from 'react';
import StudentDetailsTable from './StudentsDetailsTable';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ApplicationPreview({ onClose, onClick, openDialog, scroll, student }) {


    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (openDialog) {
            // console.log("students ---> ", student)
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [openDialog]);

    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={onClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle id="scroll-dialog-title">Application Preview</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <StudentDetailsTable student={student} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onClick}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

