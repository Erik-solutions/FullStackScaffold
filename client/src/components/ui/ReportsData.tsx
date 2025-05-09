import { SalesReportItem,MarketOverviewItem,ProductLaunchItem,CustomerInsightsItem, reportItem,
    IncomeStatementItem, BalanceSheetItem} from "./ReportTypes";
import { SalesReport,MartketOverviewReport,ProductLaunchReport
  ,CustomerInsightsReport,ReportRender} from "./ReportContent";


export const reportItems: reportItem[] = [
  {
    name: "Sales Report Q1",
    period: "Jan - Mar 2025",
    updated: "2025-04-01",
  },
  {
    name: "Marketing Overview",
    period: "Feb 2025",
    updated: "2025-03-15",
  },
  {
    name: "Customer Insights",
    period: "Q1 2025",
    updated: "2025-04-05",
  },
  {
    name: "Product Launch Summary",
    period: "Mar 2025",
    updated: "2025-03-30",
  },
];

export const SalesReportItems: SalesReportItem[] = [
    {
      date: "2025-01-05",
      segment: "Retail",
      productName: "Widget A",
      units: "120",
      unitPrice: "$50",
      total: "$6,000",
      
    },
    {
      date: "2025-01-12",
      segment: "Wholesale",
      productName: "Widget B",
      units: "75",
      unitPrice: "$70",
      total: "$5,250",
      
    },
    {
      date: "2025-01-20",
      segment: "Enterprise",
      productName: "Widget C",
      units: "200",
      unitPrice: "$40",
      total: "$8,000",
    },
    {
      date: "2025-01-25",
      segment: "Online",
      productName: "Widget D",
      units: "150",
      unitPrice: "$60",
      total: "$9,000",
    },
  ];

  export const MarketOverviewItems: MarketOverviewItem[] = [
    {
      region: "North America",
      market: "Consumer Electronics",
      sizeGrowth: "$1.2B",
      growthRate: "5%",
      topCompetitors: "Company A, Company B",
    },
    {
      region: "Europe",
      market: "Smart Home Devices",
      sizeGrowth: "$950M",
      growthRate: "3%",
      topCompetitors: "Company C, Company D",
    },
    {
      region: "Asia-Pacific",
      market: "Mobile Devices",
      sizeGrowth: "$2.5B",
      growthRate: "8%",
      topCompetitors: "Company E, Company F",
    },
    {
      region: "Latin America",
      market: "Wearable Tech",
      sizeGrowth: "$600M",
      growthRate: "4%",
      topCompetitors: "Company G, Company H",
    },
  ];

  export const ProductLaunchItems: ProductLaunchItem[] = [
    {
      product: "Widget X",
      launchDate: "2025-02-01",
      unitsSold: "10,000",
      customerFeedback: "Very Positive",
      challenges: "Supply Chain Delays",
    },
    {
      product: "Widget Y",
      launchDate: "2025-03-15",
      unitsSold: "5,500",
      customerFeedback: "Mixed",
      challenges: "Low Marketing Reach",
    },
    {
      product: "Widget Z",
      launchDate: "2025-04-10",
      unitsSold: "8,200",
      customerFeedback: "Positive",
      challenges: "Post-launch Support",
    },
    {
      product: "Widget Pro",
      launchDate: "2025-05-01",
      unitsSold: "6,800",
      customerFeedback: "Excellent",
      challenges: "Feature Requests",
    },
  ];

  
  export const CustomerInsightsItems: CustomerInsightsItem[] = [
    {
      customerSegment: "Enterprise",
      satisfactionRating: "4.6/5",
      purchaseFrequency: "Monthly",
      averageOrderValue: "$1,200",
    },
    {
      customerSegment: "Small Business",
      satisfactionRating: "4.2/5",
      purchaseFrequency: "Quarterly",
      averageOrderValue: "$850",
    },
    {
      customerSegment: "Retail",
      satisfactionRating: "4.0/5",
      purchaseFrequency: "Weekly",
      averageOrderValue: "$300",
    },
    {
      customerSegment: "Freelancers",
      satisfactionRating: "4.3/5",
      purchaseFrequency: "Bi-weekly",
      averageOrderValue: "$500",
    },
  ];
  
  
  export const IncomeStatementItems: IncomeStatementItem = {
    income: {
      breakdown: [
        { name: "Product Sales", amount: 150000 },
        { name: "Service Revenue", amount: 30000 },
      ],
    },
    expenses: {
      breakdown: [
        { name: "Salaries", amount: 70000 },
        { name: "Marketing", amount: 15000 },
        { name: "R&D", amount: 10000 },
      ],
    },
  };
  

  export const BalanceSheetItems: BalanceSheetItem = {
    assets: {
      currentAssets: 100000,
      fixedAssets: 250000,
    },
    liabilities: {
      currentLiabilities: 50000,
      longTermLiabilities: 100000,
    },
    equity: 200000,
  };
  

<ReportRender
  reportItems={reportItems}
  renderChild={(item) => {
    switch (item.name) {
      case "Sales Report Q1":
        return <SalesReport SalesReportItems={SalesReportItems} />
      case "Marketing Overview":
        return <MartketOverviewReport MarketOverviewItems={MarketOverviewItems}/>
        case "Product Launch Summary":
          return <ProductLaunchReport ProductLaunchItems={ProductLaunchItems}/>
        case "Customer Insights":
          return <CustomerInsightsReport CustomerInsightsItems={CustomerInsightsItems}/>
          default:
            return <h1>No report available</h1>
    }
  }}
/>

///

export const ReportsContent = ({}) => {
 
  return ( <> <SalesReport SalesReportItems={SalesReportItems} />
  <MartketOverviewReport MarketOverviewItems={MarketOverviewItems}/>
  <CustomerInsightsReport CustomerInsightsItems={CustomerInsightsItems}/>
  <ProductLaunchReport ProductLaunchItems={ProductLaunchItems}/>
  
  </>
  );

};

export const  Reports=()=>{
 return(
   <ReportRender
  reportItems={reportItems}
  renderChild={(item) => {
    switch (item.name) {
      case "Sales Report Q1":
        return <SalesReport SalesReportItems={SalesReportItems} />
      case "Marketing Overview":
        return <MartketOverviewReport MarketOverviewItems={MarketOverviewItems}/>
        case "Product Launch Summary":
          return <ProductLaunchReport ProductLaunchItems={ProductLaunchItems}/>
        case "Customer Insights":
          return <CustomerInsightsReport CustomerInsightsItems={CustomerInsightsItems}/>
          default:
            return <h1>No report available</h1>
    }
  }} />)
}