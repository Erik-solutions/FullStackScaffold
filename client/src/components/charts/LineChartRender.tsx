import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


export interface DataItem {
    name: string;
    metrix_1: number;
    metrix_2: number;
    metrix_3: number;
  }

export interface LineChartRenderProps {
  data: DataItem[];
  width?: number;
  height?: number;
}

export const LineChartRender: React.FC<LineChartRenderProps> = ({
  data,
  width = 500,
  height = 300,
}) => {
  return (
    <div className='w-full h-full'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={width}
          height={height}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="metrix_1" stroke="#FF0B55" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="metrix_2" stroke="#3A59D1" />
          <Line type="monotone" dataKey="metrix_3" stroke="#8E7DBE" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};


