import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Documentation from "@/pages/Documentation";
import ApiReference from "@/pages/ApiReference";
import MainLayout from "@/layouts/MainLayout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/documentation" component={Documentation} />
      <Route path="/api-reference" component={ApiReference} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Router />
      </MainLayout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
