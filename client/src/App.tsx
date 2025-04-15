import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
// import Home from "@/pages/Home";
import Settings from "@/pages/finance/Settings";
import Transactions from "@/pages/finance/Transactions";
import Reports from "@/pages/finance/Reports";
import Ledgers from "@/pages/finance/Ledgers";
import Dashboard  from "@/pages/finance/Dashboard";
import DayBooks from "@/pages/finance/DayBooks";
import Invoices from "@/pages/finance/Invoices";
import MainLayout from "@/layouts/MainLayout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={ Dashboard} />
      <Route path="/Transactions" component={Transactions} />
      <Route path="/Ledgers" component={Ledgers} />
      <Route path="/Settings" component={Settings} />
      <Route path="/DayBooks" component={DayBooks} />
      <Route path="/Invoices" component={Invoices} />
      <Route path="/Reports" component={Reports} />
      {/* Fallback to 404 <Route component={NotFound} /> */}
     
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Router />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;

