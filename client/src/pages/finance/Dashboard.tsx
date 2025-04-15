import CardRender from "@/components/ui/CardRender"
import React from "react"
import MyBarChart from "@/components/charts/Charts"
import Notifications from "@/components/ui/NotificationRender"
import TransactionNotifications from "@/components/ui/RecentTransactionsRender"


export default function Dashboard() {
    return (
      <>
      
      <CardRender/>
      < MyBarChart/>
      <Notifications/>
     
      </>
    )


  }