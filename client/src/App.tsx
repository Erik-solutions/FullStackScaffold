import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
// import Home from "@/pages/Home";
import Settings from "@/pages/finance/SettingsPage";
import Transactions from "@/pages/finance/TransactionsPage";
import Reports from "@/pages/finance/ReportsPage";
import Ledgers from "@/pages/finance/LedgersPage";
import Dashboard  from "@/pages/finance/DashboardPage";
import DayBooks from "@/pages/finance/DayBooksPage";

import MainLayout from "@/layouts/MainLayout";
import InvoicesPage from "@/pages/finance/InvoicesPage";
import Signup from "./authentication/Signup"
import Login from   "./authentication/Login"
import React, { useState } from 'react';
import { LandingPage } from "./layouts/LandingPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={ Dashboard} />
      <Route path="/Transactions" component={Transactions} />
      <Route path="/Ledgers" component={Ledgers} />
      <Route path="/Settings" component={Settings} />
      <Route path="/DayBooks" component={DayBooks} />
      <Route path="/Invoices" component={InvoicesPage} />
      <Route path="/Reports" component={Reports} />
      {/* Fallback to 404 <Route component={NotFound} /> */}
     
    </Switch>
  );
}

/*function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Router />
      </MainLayout>
    </QueryClientProvider>
  );*/
 
     

function App() {
  return (

    <LandingPage/>
  )}



export default App;

