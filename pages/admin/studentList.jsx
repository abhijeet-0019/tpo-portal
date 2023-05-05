import { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})


function StudentList() {

    const classes = useStyles()
  const [students, setStudents] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/placed_students')
          .then(response => {
            setStudents(response.data)
            console.log(students)
          })
          .catch(error => {
            console.error(error)
          })
      }, [])

    return ( 
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="placed students table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Company Name</TableCell>
              <TableCell align="right">Branch</TableCell>
              <TableCell align="right">Salary per Annum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell component="th" scope="row">
                  {student.name}
                </TableCell>
                <TableCell align="right">{student.company_name}</TableCell>
                <TableCell align="right">{student.branch}</TableCell>
                <TableCell align="right">{student.salary_per_annum}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     );
}

export default StudentList;