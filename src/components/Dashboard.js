import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import PortionOfSalesChart from './PortionOfSales';
const data = [
  {
    date: '6/30/2024 - 7/6/2024',
    orders: 4,
    sales: 1404,
    avgOrderValue: 351.00
  },
  {
    date: '7/7/2024 - 7/13/2024',
    orders: 2,
    sales: 800
  },
  {
    date: '7/21/2024 - 7/27/2024',
    orders: 2,
    sales: 450
  }
];

const SalesVsOrdersChart = () => {
  return (
    <>
    <h1 style={{fontFamily:"Poppins", color : "#ff7300", paddingBottom:"5px",fontSize:"22px", textDecoration:"underline"}}>Dashboard</h1>
    <div className='container'>
        <div className='row d-flex flex-row justify-content-start align-items-between'>
            <div style={{ height: 400 , borderRadius:"10px"}} className='col-lg-8 col-12 border custom-margin'>
            <h2 style={{fontFamily:"Poppins", fontSize:"18px", padding:"10px"}} className='border-bottom'>Sales vs Orders <span style={{ color: '#888', fontSize: '0.8em' }}>ⓘ</span></h2>
                <ResponsiveContainer>
                    <LineChart
                    data={data}
                    margin={{ top: 5}}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip 
                        content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                            return (
                            <div style={{ background: 'white', padding: '10px', border: '1px solid #ccc' }}>
                                <p>{label}</p>
                                <p>Orders: {payload[0].value}</p>
                                <p>Sales: {payload[1].value}</p>
                                {payload[0].payload.avgOrderValue && 
                                <p>Avg Order Value: {payload[0].payload.avgOrderValue}</p>
                                }
                            </div>
                            );
                        }
                        return null;
                        }}
                    />
                    <Legend />
                    <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="orders" 
                        stroke="#ff7300" 
                        activeDot={{ r: 8 }} 
                    />
                    <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="sales" 
                        stroke="#00bcd4" 
                    />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='col-lg-3 col-5'>
                <PortionOfSalesChart/>
            </div>
        </div>
    </div>
    </>
    
  );
};

export default SalesVsOrdersChart;



