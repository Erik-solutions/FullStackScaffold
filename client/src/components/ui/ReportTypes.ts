

export type SalesReportItem ={
    date:string;
    segment:string;
    productName:string;
    units:string;
    unitPrice:string;
    total:string;
    
}

export interface SalesReportProps{
    SalesReportItems:SalesReportItem[];  
}

export type MarketOverviewItem={
    region:string;
     market:string;
      sizeGrowth:string;
       growthRate:string;
       	topCompetitors:string;
         
}

export interface  MarketOverviewProps{
    MarketOverviewItems:MarketOverviewItem[];
}

export type ProductLaunchItem={
    product:string;
    launchDate:string;
    unitsSold:string; 	
    customerFeedback:string;	
    challenges:string;
    
}

export interface ProductLaunchProps{
    ProductLaunchItems:ProductLaunchItem[];
}

export type CustomerInsightsItem={

    customerSegment:string;
    satisfactionRating:string;	
    purchaseFrequency:string;	
    averageOrderValue:string; 
   

}

export interface CustomerInsightsProps{
    CustomerInsightsItems:CustomerInsightsItem[];
}


export type IncomeStatementItem = {
    income: {
      breakdown: {
        name: string;   // e.g., "Product Sales", "Licensing"
        amount: number;
      }[];
    };
    expenses: {
      breakdown: {
        name: string;   // e.g., "Salaries", "Rent", "Marketing"
        amount: number;
      }[];
    };
  };

export interface IncomeStatementProps{
    IncomeStatementItem:IncomeStatementItem;
}

export type BalanceSheetItem = {
    assets: {
      currentAssets: number;
      fixedAssets: number;
    };
    liabilities: {
      currentLiabilities: number;
      longTermLiabilities: number;
    };
    equity: number;
  };


export interface  BalanceSheetProps{
    BalanceSheetItem:BalanceSheetItem;
}


export type reportItem ={
  name:string;
  period:string;
  updated:string
}

export interface reportRenderProps{
  reportItems:reportItem[];
  renderChild: (item: reportItem) => React.ReactNode;
}