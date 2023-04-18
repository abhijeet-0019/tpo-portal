import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

const AddNotification = () => {
    const [subHeading, setSubHeading] = React.useState('Update');
    const [company, setCompany] = React.useState('');
    const [batch, setBatch] = React.useState('');
    const [content, setContent] = React.useState('');

    const handleSubHeadingChange = (event) => {
        setSubHeading(event.target.value);
    };

    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
    };

    const handleBatchChange = (event) => {
        setBatch(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleNotifyClick = () => {
        const data = {
            company,
            batch,
            subHeading,
            content
        };

        fetch('/api/test/', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // handle response data
            })
            .catch(error => {
                console.error(error);
                // handle error
            });
    };

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '70ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField id="outlined-basic" label="company" variant="outlined" value={company} onChange={handleCompanyChange} />
                    <TextField id="outlined-basic" label="batch" variant="outlined" value={batch} onChange={handleBatchChange} />
                    <Select
                        labelId="sub-heading-select-label"
                        id="sub-heading-select"
                        value={subHeading}
                        onChange={handleSubHeadingChange}
                        label="sub-heading"
                        variant="outlined"
                    >
                        <MenuItem value="Update">Update</MenuItem>
                        <MenuItem value="Result">Result</MenuItem>
                        <MenuItem value="Reminder">Reminder</MenuItem>
                        <MenuItem value="Announcement">Announcement</MenuItem>
                    </Select>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <TextField
                        size="medium"
                        id="outlined-basic"
                        label="content"
                        variant="outlined"
                        multiline
                        value={content}
                        onChange={handleContentChange}
                        sx={{ width: '75ch' }}
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button variant="contained" color="primary" onClick={handleNotifyClick}>
                        NOTIFY
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default AddNotification