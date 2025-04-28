import React from "react";
import { BusinessCard } from "./BusinessCard";

const businesses = [
   


    {   icon:'MessageSquare',
        businessSolution: 'CRM',
        description: 'Manage Customer Relationships',
        topFeatures: ['Contact management', 'Lead Tracking', 'Communication History']
    },
    {   icon: 'DollarSign',
        businessSolution: 'Accounting',
        description: 'Enterprise Resource Planning for businesses',
        topFeatures: ['Financial Management', 'Supply Chain Management', 'Inventory Tracking']
    },
    {
        icon: 'Users',
        businessSolution: 'HRM',
        description: 'Human Resource Management',
        topFeatures: ['Employee Management', 'Payroll Processing', 'Performance Tracking']
    },
    { 
        icon:'<ClipboardList/>',
        businessSolution: 'Operations',
        description: 'Content Management System',
        topFeatures: ['Content Creation', 'Media Management', 'SEO Optimization']
    }
];

export const   Businesses: React.FC =()=> {
   return <BusinessCard businessList={businesses}/>
}