import { useState, useEffect } from "react";
import style from "./register.module.css";
import useAPIData from "../../apiConfig/useAPIData";

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
  const { getItems, updateItem } = useAPIData();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getItems(
          "TPO_students_personal_details",
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          true
        );
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  const [formData_personal, setFormData_personal] = useState({
    name: "",
    dob: "",
    mobile_num: "",
    branch_id: "",
     postal_address: "",
    category: "",
    
    //hasError: false
  });
  const [formData_academic, setformData_academic] = useState({
    roll_no: "",
    branch_id: "",
    current_year: "",
    grad_year: "",
    dead_kt: "",
    active_kt: "",
    board_10: "",
    board_12: "",
    percentage_10: "",
    percentage_12: "",
    be_percentage: ""
    //hasError: false
  });

  const handleFormSubmit_personal = (event) => {
    event.preventDefault();
    

    if(!!formData_personal){
      updateItem('TPO_students_personal_details',data[0].id,formData_personal,true).then(success=>{
         alert("submission succesful")
         
      }).catch(fail=>{
        alert("submission failed")
      });
    }
    // Submit form data to backend API
    console.log(formData_personal);
  };

  const handleFormSubmit_academic = (event) => {
    event.preventDefault();

    if(!!formData_academic){
      updateItem('TPO_academic_details',data[0],formData_academic,true).then(success=>{
         alert("submission succesful")
         
      }).catch(fail=>{
        alert("submission failed")
      });
    }
    // Submit form data to backend API
    console.log(formData_academic);
  };

  const handleInputChange_personal = (event) => {
    const { name, value } = event.target;
    // let hasError;
    // if (name == "mobile_num" && value.length < 10) {
    //   hasError = true;
    // }
    setFormData_personal((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      //hasError,
    }));
  };
  const handleInputChange_academic = (event) => {
    const { name, value } = event.target;
    setformData_academic((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      //hasError,
    }));
  };

  return (
    <div>
      <div className={style.header}>
        <h1>Register on the TPO Portal</h1>
      </div>
      <form onSubmit={handleFormSubmit_personal && handleFormSubmit_academic}>
        <Grid container spacing={3} style={{padding:'50px'}} >
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="name"
              label="Full Name"
              fullWidth
              value={formData_personal.name}
              onChange={handleInputChange_personal}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="dob"
              label="Date of Birth"
              type="date"
              fullWidth
              value={formData_personal.dob}
              onChange={handleInputChange_personal}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="mobile_num"
              label="Phone Number"
              type="tel"
              fullWidth
              value={formData_personal.mobile_num}
              onChange={handleInputChange_personal}
              error={formData_personal.hasError} //error is shown if hasError==true
              helperText={
                formData_personal.hasError ? "Phone number must be of 10 digits" : " "
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="roll_no"
              label="Roll Number"
              fullWidth
              value={formData_academic.roll_no}
              onChange={handleInputChange_academic}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              name="postal_address"
              label="Address"
              fullWidth
              value={formData_personal.postal_address}
              onChange={handleInputChange_personal}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="branch_id"
              label="Branch"
              fullWidth
              value={formData_personal.branch_id}
              onChange={handleInputChange_personal}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="current_year"
              label="Current Year"
              type="number"
              fullWidth
              value={formData_academic.current_year}
              onChange={handleInputChange_academic}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="grad_year"
              label="Graduation Year"
              type="number"
              inputProps={{ min: 1950, max: 2100 }}
              fullWidth
              value={formData_personal.grad_year}
              onChange={handleInputChange_academic}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                name="category"
                value={formData_personal.category}
                onChange={handleInputChange_personal}
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
              name="dead_kt"
              label="Number of dead KT"
              type="number"
              fullWidth
              value={formData_academic.dead_kt}
              onChange={handleInputChange_academic}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="active_kt"
              label="Number of active KT"
              type="number"
              fullWidth
              value={formData_academic.active_kt}
              onChange={handleInputChange_academic}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="board_10"
              label="10th board name"
              type="text"
              fullWidth
              value={formData_academic.board_10}
              onChange={handleInputChange_academic}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="board_12"
              label="12th board name"
              type="text"
              fullWidth
              value={formData_academic.board_12}
              onChange={handleInputChange_academic}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="percentage_10"
              label="percetage in 10th"
              type="number"
              fullWidth
              value={formData_academic.percentage_10}
              onChange={handleInputChange_academic}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="percentage_12"
              label="percentage in 12th"
              type="number"
              fullWidth
              value={formData_academic.percentage_12}
              onChange={handleInputChange_academic}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="be_percentage"
              label="BE Aggregate CGPA"
              type="number"
              fullWidth
              value={formData_academic.be_percentage}
              onChange={handleInputChange_academic}
            />
          </Grid>


          <Grid item xs={12}>
            <h4>Upload marksheets</h4>
          </Grid>
          <Input type="file" onChange={handleInputChange_academic} />

          <Grid item xs={12}>
            <h4>Upload Resume</h4>
          </Grid>
          <Input type="file" onChange={handleInputChange_academic} />
        </Grid>

        <Grid item xs={12}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            type="submit"
            onClick={ function(event){handleFormSubmit_academic; handleFormSubmit_personal}}
            style={{ margin: "80px", marginLeft: "50%" }}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
};
export default Register;
