
import React from 'react';
import {MetricsCard,MetricItem } from './Card';

const metricContentList = [
  {
    title: 'Expenses',
    indicator: 'positive',
    metric: '$2,400,000',
    comment: '10% higher than last year',
  },
  {
    title: 'Revenue',
    indicator: 'positive',
    metric: '$5,800,000',
    comment: '15% increase from Q1',
  },
  {
    title: 'Customer Growth',
    indicator: 'positive',
    metric: '12,500',
    comment: '5% more than previous quarter',
  },
  {
    title: 'Churn Rate',
    indicator: 'negative',
    metric: '8.2%',
    comment: 'Slightly higher due to seasonal trends',
  },
];

export default function CardRender() {
  return <MetricsCard metricContentList={metricContentList as MetricItem[]} />;
}
