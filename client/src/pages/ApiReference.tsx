import { Card } from "@/components/ui/card";
import { BadgeMethod } from "@/components/ui/badge-method";
import { useQuery } from "@tanstack/react-query";

export default function ApiReference() {
  // Fetch users to show in the API response example
  const { data: users, isLoading } = useQuery({
    queryKey: ["/api/users"],
  });

  return (
    <div className="space-y-6">
      <Card className="p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">API Reference</h1>
        <p className="text-gray-600 mb-6">
          This page documents the available API endpoints in the application. All endpoints are prefixed with /api.
        </p>

        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Method
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Endpoint
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <BadgeMethod method="GET" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-700">/api/health</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Check server health status</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Available
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <BadgeMethod method="GET" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-700">/api/users</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Get all users</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Available
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <BadgeMethod method="POST" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-700">/api/users</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Create a new user</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Available
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <BadgeMethod method="GET" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-700">/api/users/:id</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Get user by ID</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Available
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <BadgeMethod method="PUT" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-700">/api/users/:id</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Update user by ID</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Available
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <BadgeMethod method="DELETE" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-700">/api/users/:id</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Delete user by ID</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Available
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Code Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Frontend API Integration</h3>
            </div>
            <div className="code-block">
              <pre>
                <code>
                  {`// Example using TanStack Query
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';

// Fetch all users
const { data: users, isLoading } = useQuery({
  queryKey: ['/api/users']
});

// Create a new user
const createUserMutation = useMutation({
  mutationFn: (userData) => 
    apiRequest('POST', '/api/users', userData),
  onSuccess: () => {
    // Invalidate users cache to refetch
    queryClient.invalidateQueries({ 
      queryKey: ['/api/users'] 
    });
  }
});

// Usage
createUserMutation.mutate({
  username: 'newuser',
  password: 'password123'
});`}
                </code>
              </pre>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Server API Response</h3>
            </div>
            <div className="code-block">
              <pre>
                <code>
                  {isLoading
                    ? "Loading users..."
                    : JSON.stringify(users || { users: [{ id: 1, username: "admin" }] }, null, 2)}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
