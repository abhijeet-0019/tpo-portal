import React from 'react'
import Navbar2 from '../components/Navbar2'
import withAuthAdmin from '../../apiConfig/withAuthAdmin';

import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Bar
} from "recharts";
import style from "./dashboard.module.css"

const data2 = [
  {
    name: "CSE",
    Registered: 180,
    Placed: 130,
    avg_package: 1500000,
  },
  {
    name: "IT",
    Registered: 140,
    Placed: 100,
    avg_package: 1000000,
  },
  {
    name: "Mech",
    Registered: 140,
    Placed: 102,
    avg_package: 500000,
  },
  {
    name: "Civil",
    Registered: 138,
    Placed: 58,
    avg_package: 500000,
  },
  {
    name: "ECC",
    Registered: 148,
    Placed: 89,
  },
  {
    name: "EEE",
    Registered: 120,
    Placed: 40,
    avg_package: 6500000,
  },
  {
    name: "Mining",
    Registered: 111,
    Placed: 92,
    avg_package: 1100000,
  },
  {
    name: "ECE",
    Registered: 134,
    Placed: 37,
    avg_package: 5500000,
  },
  {
    name: "EE",
    Registered: 60,
    Placed: 39,
    avg_package: 4500000,
  },
  {
    name: "P&I",
    Registered: 84,
    Placed: 85,
    avg_package: 3500000,
  },
];


const dashboard = () => {
  
  return (
    <Navbar2 loginStatus={true} userType={'admin'}>
      <div>
      <h1>Placement Analysis 2023</h1>
      <ResponsiveContainer className={style.chart} width={1000} height={500}>
        <BarChart
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[20, 30]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Placed" fill="#8884d8" />
          <Bar dataKey="Registered" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>

    </Navbar2>
  )
}

export default withAuthAdmin(dashboard)