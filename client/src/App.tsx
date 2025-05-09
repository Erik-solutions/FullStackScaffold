import { Switch, Route } from "wouter";
import { useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
// import Home from "@/pages/Home";
import Settings from "@/pages/finance/SettingsPage";
import Transactions from "@/pages/finance/TransactionsPage";
import ReportPage from "@/pages/finance/ReportsPage";
import Ledgers from "@/pages/finance/LedgersPage";
import Dashboard  from "@/pages/finance/DashboardPage";
import DayBooks from "@/pages/finance/DayBooksPage";


import MainLayout from "@/layouts/MainLayout";
import InvoicesPage from "@/pages/finance/InvoicesPage";
import React, { useState } from 'react';
import { LandingPage } from "./layouts/LandingPage";
import ProtectedRoute from "./authenticationOne/ProtectedRoute";
import { AuthProvider } from "./authenticationOne/AuthContext";

function Router() {
  return (
    <Switch>
    <Route path="/Dashboard">
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    </Route>
    <Route path="/Transactions">
      <ProtectedRoute>
        <Transactions />
      </ProtectedRoute>
    </Route>
    <Route path="/Ledgers">
      <ProtectedRoute>
        <Ledgers />
      </ProtectedRoute>
    </Route>
    <Route path="/Settings">
      <ProtectedRoute>
        <Settings />
      </ProtectedRoute>
    </Route>
    <Route path="/DayBooks">
      <ProtectedRoute>
        <DayBooks />
      </ProtectedRoute>
    </Route>
    <Route path="/Invoices">
      <ProtectedRoute>
        <InvoicesPage />
      </ProtectedRoute>
    </Route>
    <Route path="/Reports">
      <ProtectedRoute>
        <ReportPage />
      </ProtectedRoute>
    </Route>
    <Route>🛑 Page not found</Route>
  </Switch>
    
     
   
  );
}
/*
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Router />
      </MainLayout>
    </QueryClientProvider>
  );
  };*/
     
  function App() {
    const [location] = useLocation();
    const isAuthRoute = location !== "/";
  
    return (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {isAuthRoute ? (
            <MainLayout>
              <Router />
            </MainLayout>
          ) : (
            <LandingPage />
          )}
        </AuthProvider>
      </QueryClientProvider>
    );
  }
  
  





export default App;

