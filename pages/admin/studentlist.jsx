import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import useAPIData from '../../apiConfig/useAPIData'
import Navbar2 from '../components/Navbar2'
import withAuthAdmin from '../../apiConfig/withAuthAdmin'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})


function StudentList() {
  const { getItems } = useAPIData()
  const classes = useStyles()
  const [students, setStudents] = useState([])
  const [branchFilter, setBranchFilter] = useState('')
  const [companyFilter, setCompanyFilter] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await getItems('TPO_students_personal_details',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        true
      )
      const data = response.data
      console.log(data)
    }
    fetchData()
  }, [])


  const filteredStudents = students.filter(student =>
    student.branch.includes(branchFilter) &&
    student.company_name.includes(companyFilter)
  )

  const handleBranchFilterChange = (event) => {
    setBranchFilter(event.target.value)
  }

  const handleCompanyFilterChange = (event) => {
    setCompanyFilter(event.target.value)
  }

  return (
    <Navbar2 loginStatus={true} userType={'admin'}>
      <div>
        <div>
          <TextField
            label="Filter by branch"
            value={branchFilter}
            onChange={handleBranchFilterChange}
            margin="normal"
          />
          <TextField
            label="Filter by company"
            value={companyFilter}
            onChange={handleCompanyFilterChange}
            margin="normal"
          />
        </div>
        <br />
        <br />


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
              {filteredStudents.map((student) => (
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
      </div>
    </Navbar2>
  );
}

export default withAuthAdmin(StudentList);