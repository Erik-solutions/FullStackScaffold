
import React from 'react';
import {MetricsCard,MetricItem } from './Card';

const metricContentList = [
  {
    title: 'Expenses',
    indicator: 'positive',
    metric: '$2,400,000',
    comment: '10% higher than last year',
    description:'Some data has been extracted into basi local variables just to clean up duplication and make the code easier to read and understand, but weve tried to do as little as possible to avoid enforcing any unnecessarily rigid opinions',
  },
  {
    title: 'Revenue',
    indicator: 'positive',
    metric: '$5,800,000',
    comment: '15% increase from Q1',
    description:'Some data has been extracted into basic local variables just to clean up duplication and make the code easier to read and understand, but weve tried to do as little as possible to avoid enforcing any unnecessarily rigid opinions',
  },
  {
    title: 'Customer Growth',
    indicator: 'positive',
    metric: '12,500',
    comment: '5% more than previous quarter',
    description:'poped',
  },
  {
    title: 'Churn Rate',
    indicator: 'negative',
    metric: '8.2%',
    comment: 'Slightly higher due to seasonal trends',
    description:'poped',
  },
];

export default function CardRender() {
  return <MetricsCard metricContentList={metricContentList as MetricItem[]} />;
}
