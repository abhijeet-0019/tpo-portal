import React from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';

const ProfilePreview = (props) => {
    const { profileData } = props;
    React.useEffect(() => {
        console.log("profile data -> ", profileData)
    }, [])
    const pd = profileData.userPersonal[0];
    const ad = profileData.userAcademic[0];
    const student = {
        name: pd.name,
        email: pd.email,
        gender: pd.gender,
        mobile: pd.mobile_num,
        mother: pd.mother_name,
        father: pd.father_name,
        address: pd.postal_address,
        dob: pd.dob,
        rollno: ad.roll_no,
        branch: pd.branch_id,
        be_per: ad.be_percentage,
        per_10: ad.percentage_10,
        per_12: ad.percentage_12,
        grad_year: ad.grad_year,
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Profile Preview
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>Name:</strong> {student.name}
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>Email:</strong> {student.email}
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>Contact:</strong> {student.mobile}
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>Mother's Name:</strong> {student.mother}
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>Father's Name:</strong> {student.father}
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>DOB:</strong> {student.dob}
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>Address:</strong> {student.address}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>Roll No:</strong> {student.rollno}
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>Branch:</strong> {student.branch}
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>Graduation Year:</strong> {student.grad_year}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>BE percentage:</strong> {student.be_per}
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>10th percentage:</strong> {student.per_10}
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="body1">
                            <strong>12th percentage:</strong> {student.per_12}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProfilePreview;