import { useState } from "react";
import style from "./register.module.css";
import Navbar2 from "../../components/Navbar2";

import {
  TextField,
  Typography,
  Button,
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Input,
} from "@material-ui/core";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    phoneNumber: "",
    rollNumber: "",
    branch: "",
    currentYear: "",
    graduationYear: "",
    address: "",
    category: "",
    //hasError: false
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Submit form data to backend API
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let hasError;
    if (name == "phoneNumber" && value.length < 10) {
      hasError = true;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      hasError,
    }));
  };

  return (
    <Navbar2 loginStatus={true} userType={'applicant'}>
      <div>
        <div className={style.header}>
          <h1>Register on the TPO Portal</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={3} style={{ padding: '50px' }} >
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="fullName"
                label="Full Name"
                fullWidth
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="dob"
                label="Date of Birth"
                type="date"
                fullWidth
                value={formData.dob}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="phoneNumber"
                label="Phone Number"
                type="tel"
                fullWidth
                value={formData.phoneNumber}
                onChange={handleInputChange}
                error={formData.hasError} //error is shown if hasError==true
                helperText={
                  formData.hasError ? "Phone number must be of 10 digits" : " "
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="rollNumber"
                label="Roll Number"
                fullWidth
                value={formData.rollNumber}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                name="address"
                label="Address"
                fullWidth
                value={formData.address}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="branch"
                label="Branch"
                fullWidth
                value={formData.branch}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="currentYear"
                label="Current Year"
                type="number"
                fullWidth
                value={formData.currentYear}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="graduationYear"
                label="Graduation Year"
                type="number"
                inputProps={{ min: 1950, max: 2100 }}
                fullWidth
                value={formData.graduationYear}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <MenuItem value="general">General</MenuItem>
                  <MenuItem value="sc">SC</MenuItem>
                  <MenuItem value="st">ST</MenuItem>
                  <MenuItem value="ews">EWS</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="kt"
                label="Number of dead KT"
                type="number"
                fullWidth
                value={formData.kt}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="activeKt"
                label="Number of active KT"
                type="number"
                fullWidth
                value={formData.activeKt}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="board10"
                label="10th board name"
                type="text"
                fullWidth
                value={formData.board10}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="board12"
                label="12th board name"
                type="text"
                fullWidth
                value={formData.board12}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="marks10"
                label="percetage in 10th"
                type="number"
                fullWidth
                value={formData.marks10}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="marks12"
                label="percentage in 12th"
                type="number"
                fullWidth
                value={formData.marks12}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <h4>Upload marksheets</h4>
            </Grid>
            <Input type="file" onChange={handleInputChange} />

            <Grid item xs={12}>
              <h4>Upload Resume</h4>
            </Grid>
            <Input type="file" onChange={handleInputChange} />
          </Grid>

          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleFormSubmit}
              style={{ margin: "80px", marginLeft: "50%" }}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    </Navbar2>
  );
};
export default Register;
