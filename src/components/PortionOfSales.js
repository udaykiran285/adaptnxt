import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'WooCommerce Store', value: 1484 },
  { name: 'Shopify Store', value: 1175 },
];

const COLORS = ['#ff6b81', '#29d0d0'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={16}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          padding: '5px',
          borderRadius: '5px',
        }}
      >
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const SalesPieChart = () => {
  return (
    <div style={{ width: 300, height: 400, textAlign: 'center', border: '1px solid #f0f0f0', borderRadius: '8px', padding: '5px' }}>
      <h2 style={{fontFamily:"Poppins", fontSize:"18px", padding:"10px", textAlign: 'left'}} className='border-bottom'>Portion of Sales <span style={{ color: '#888', fontSize: '0.8em' }}>ⓘ</span></h2>
      <PieChart width={250} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={-270}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="recharts-text recharts-label"
          fill="#000"
          fontSize={16}
          fontWeight="normal"  // Regular weight for "Total"
        >
          Total
        </text>
        <text
          x="50%"
          y="51%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="recharts-text recharts-label"
          fill="#000"
          fontSize={22}
          fontWeight="600"  // Bold weight for "2659"
        >
          2659
        </text>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

export default SalesPieChart;
