import {TrendingDown} from 'lucide-react';
import { title } from 'process';


export  type MetricItem = {
        title: string;
        indicator: 'positive' | 'negative';
        metric: string;
        comment: string;
        description:string;
      };

 export type MetricsCardProps = {
        metricContentList: MetricItem[];
      };


    
     /* 
     
      export    const MetricsCard: React.FC<MetricsCardProps> = ({ metricContentList }) => {
        return (
          <div className=" grid__container w-full grid grid-cols-1 md:grid-cols-4 gap-4">
            {metricContentList.map((item, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 shadow-sm ${
                  item.indicator === 'positive' ? 'border-green-500' : 'border-red-500'
                }`}
              >
                <span className='inline-flex w-full  justify-between'>
                  <h2 className="text-lg mb-4">{item.title} </h2> 
                   <TrendingDown className={ `${
                  item.indicator === 'positive' ? 'stroke-green-500' : 'stroke-red-500'
                }`}/> </span>
                <p className="mb-4">{item.metric}</p>
                <p
                  className={`text-sm mb-3 ${
                    item.indicator === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {item.comment}
                </p>
              </div>
            ))}
          </div>
        );
      };*/
     


      export const MetricsCard: React.FC<MetricsCardProps> = ({ metricContentList }) => {
        return (
          <div className="grid__container w-full grid grid-cols-1 md:grid-cols-4 gap-4">
            {metricContentList.map((item, index) => (
              <div
                key={index}
                className="relative group" // important for hover popover
              >
                {/* Main card */}
                <div
                  className={`border rounded-lg p-4 shadow-sm w-full cursor-pointer transition-all duration-200 ${
                    item.indicator === 'positive' ? 'border-green-500' : 'border-red-500'
                  }`}
                >
                  <span className="inline-flex w-full justify-between">
                    <h2 className="text-lg mb-4">{item.title}</h2>
                    <TrendingDown
                      className={`${
                        item.indicator === 'positive' ? 'stroke-green-500' : 'stroke-red-500'
                      }`}
                    />
                  </span>
                  <p className="mb-4">{item.metric}</p>
                  <p
                    className={`text-sm mb-3 ${
                      item.indicator === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {item.comment}
                  </p>
                </div>
      
                {/* Popover */}
                <div className={`absolute left-1/2 -translate-x-1/2 
                top-full mt-2 w-full p-3 bg-white text-sm text-gray-700 rounded shadow-lg border 
                z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none 
                ${item.indicator === 'positive' ? 'border-green-500' : 'border-red-500'}`}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        );
      };
      
