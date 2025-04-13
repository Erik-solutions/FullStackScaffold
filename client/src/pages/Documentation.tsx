import { Card } from "@/components/ui/card";

export default function Documentation() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Documentation</h1>
        <div className="prose max-w-none">
          <h2>Getting Started</h2>
          <p>
            This template provides a starting point for building full-stack applications with React on the frontend and
            Express on the backend. The project is set up with Vite for fast development and building.
          </p>

          <h2>Project Structure</h2>
          <p>The project is organized into the following main directories:</p>
          <ul>
            <li>
              <strong>/client</strong> - Contains the React frontend application
              <ul>
                <li>/src - Source files for the React application</li>
                <li>/components - Reusable UI components</li>
                <li>/pages - Page components for different routes</li>
                <li>/layouts - Layout components for page structure</li>
                <li>/lib - Utility functions and configurations</li>
              </ul>
            </li>
            <li>
              <strong>/server</strong> - Contains the Express backend application
              <ul>
                <li>/api - Controllers for handling API requests</li>
                <li>/routes.ts - Route definitions</li>
                <li>/storage.ts - Data storage interface</li>
              </ul>
            </li>
            <li>
              <strong>/shared</strong> - Shared code between frontend and backend
              <ul>
                <li>/schema.ts - Database schema definitions</li>
                <li>/types.ts - TypeScript type definitions</li>
              </ul>
            </li>
          </ul>

          <h2>Frontend Development</h2>
          <p>
            The frontend is built with React and uses the following technologies:
          </p>
          <ul>
            <li>Vite - For fast development and optimized builds</li>
            <li>React - UI library</li>
            <li>wouter - For client-side routing</li>
            <li>Tailwind CSS - For styling</li>
            <li>TanStack Query - For data fetching and caching</li>
            <li>Shadcn UI - For UI components</li>
          </ul>

          <h2>Backend Development</h2>
          <p>
            The backend is built with Express and provides a RESTful API for the frontend. It uses an in-memory storage
            solution by default but can be configured to use a database.
          </p>

          <h2>Development Workflow</h2>
          <p>
            During development, you can run the application using <code>npm run dev</code>. This will start both the
            frontend and backend servers. The frontend will be available at{" "}
            <a href="http://localhost:5000" className="text-blue-600 hover:underline">
              http://localhost:5000
            </a>
            .
          </p>

          <h2>Building for Production</h2>
          <p>
            To build the application for production, run <code>npm run build</code>. This will create optimized builds
            for both the frontend and backend. You can then start the production server using{" "}
            <code>npm run start</code>.
          </p>
        </div>
      </Card>
    </div>
  );
}
