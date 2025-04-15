import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Define the shape of the data
export interface DataItem {
  name: string;
  metrix_1: number;
  metrix_2: number;
  metrix_3: number;
}

export  interface BarchartRenderProps {
  data: DataItem[];         // Data for the chart
  width?: number;           // Optional width of the chart
  height?: number;          // Optional height of the chart
}

// Sample data for the chart


export  const BarchartRender: React.FC <BarchartRenderProps> = ({ data, width = 500, height = 300 }) => (
  <div className='w-full h-full'>
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={width}
      height={height}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="metrix_1" stackId="a" fill="#FF0B55" />
      <Bar dataKey="metrix_2" stackId="a" fill="#3A59D1" />
      <Bar dataKey="metrix_3" fill="#8E7DBE" />
    </BarChart>
  </ResponsiveContainer> </div>
);

