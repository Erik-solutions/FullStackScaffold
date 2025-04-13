import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Bolt, 
  Server, 
  Ticket, 
  Route, 
  Shield, 
  Download 
} from "lucide-react";
import { FaReact } from "react-icons/fa";

export default function Home() {
  const features = [
    {
      icon: <Bolt className="h-5 w-5 text-primary" />,
      title: "Vite Powered",
      description: "Lightning fast HMR and optimized build process for maximum developer productivity.",
      bgColor: "bg-blue-100",
    },
    {
      icon: <FaReact className="h-5 w-5 text-secondary" />,
      title: "React Components",
      description: "Organized React component structure with best practices and modular architecture.",
      bgColor: "bg-green-100",
    },
    {
      icon: <Server className="h-5 w-5 text-accent" />,
      title: "Express Backend",
      description: "Robust Express server with API endpoints, middleware configuration, and error handling.",
      bgColor: "bg-purple-100",
    },
    {
      icon: <Ticket className="h-5 w-5 text-indigo-500" />,
      title: "API Integration",
      description: "Seamless frontend-backend communication with TanStack Query and example API endpoints.",
      bgColor: "bg-indigo-100",
    },
    {
      icon: <Route className="h-5 w-5 text-yellow-600" />,
      title: "Routing Setup",
      description: "Client-side routing with wouter and server-side routing with Express.",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <Shield className="h-5 w-5 text-red-500" />,
      title: "Environment Setup",
      description: "Environment variables configuration for development and production environments.",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero section */}
      <Card className="p-6 mb-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">React + Express + Vite Starter Template</h1>
            <p className="mt-2 text-gray-600">
              A modern full-stack development environment with React frontend and Express backend.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button className="bg-primary hover:bg-blue-600">
              <Download className="mr-2 h-4 w-4" /> Get Started
            </Button>
          </div>
        </div>
      </Card>

      {/* Main features */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`flex-shrink-0 h-10 w-10 rounded-full ${feature.bgColor} flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Setup instructions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Setup</h2>
        <Card className="p-6">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">1</span>
              </div>
              <h3 className="ml-3 text-lg font-medium text-gray-900">Clone the repository</h3>
            </div>
            <div className="code-block ml-9">
              <code>git clone https://github.com/example/react-express-vite-starter.git</code>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">2</span>
              </div>
              <h3 className="ml-3 text-lg font-medium text-gray-900">Install dependencies</h3>
            </div>
            <div className="code-block ml-9">
              <code>cd react-express-vite-starter<br />npm install</code>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">3</span>
              </div>
              <h3 className="ml-3 text-lg font-medium text-gray-900">Configure environment variables</h3>
            </div>
            <div className="code-block ml-9">
              <code>cp .env.example .env<br /># Edit .env file with your configuration</code>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">4</span>
              </div>
              <h3 className="ml-3 text-lg font-medium text-gray-900">Start development servers</h3>
            </div>
            <div className="code-block ml-9">
              <code>npm run dev # Starts both client and server</code>
            </div>
          </div>
        </Card>
      </div>

      {/* Environment config */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Environment Configuration</h2>
        <Card className="p-6">
          <p className="text-gray-600 mb-4">Configure your application environment with the following variables:</p>
          <div className="code-block">
            <pre>
              <code>
                # .env example

                # Server configuration
                PORT=5000
                NODE_ENV=development

                # Client configuration
                VITE_API_URL=http://localhost:5000/api

                # Database configuration
                DB_HOST=localhost
                DB_USER=dbuser
                DB_PASSWORD=dbpassword
                DB_NAME=myapp

                # JWT Secret (if using authentication)
                JWT_SECRET=your_jwt_secret
              </code>
            </pre>
          </div>
        </Card>
      </div>
    </div>
  );
}
