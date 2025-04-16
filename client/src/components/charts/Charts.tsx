import React from 'react';
import { Bar } from 'react-chartjs-2';
import {BarchartRender,DataItem} from './BarChart';
import {LineChartRender} from './LineChartRender'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';
import { LineChart, Line } from 'recharts';

const departmentData= [
    { department: 'Page A', sales: 4000, cost: 2400, profit: 2400 },
    { department: 'Page B', sales: 3000, cost: 1398, profit: 2210 },
    { department: 'Page C', sales: 2000, cost: 9800, profit: 2290 },
    { department: 'Page D', sales: 2780, cost: 3908, profit: 2000 },
    { department: 'Page E', sales: 1890, cost: 4800, proft: 2181 },]

const data: DataItem[] = [
    { name: 'Product A', metrix_1: 4000, metrix_2: 2400, metrix_3: 2400 },
    { name: 'Product B', metrix_1: 3000, metrix_2: 1398, metrix_3: 2210 },
    { name: 'Product C', metrix_1: 2000, metrix_2: 1800, metrix_3: 2290 },

  ];

export default function MyCharts() {
  return (
    <div className="w-full h-[400px] grid grid-cols-2 gap-4 mt-8  charts__container rounded-lg">
    
      <BarchartRender data={data} width={600} height={400} />
      <LineChartRender data={data} width={600} height={400} />
     
      </div>
  );
}



