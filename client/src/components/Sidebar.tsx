import { Search } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="hidden md:block w-64 bg-white border-r border-gray-200 py-4">
      <div className="px-4 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="px-4 py-2">
        <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Project Structure</h3>
        <div className="mt-2 space-y-1">
          <a href="#" className="sidebar-link text-gray-900">
            <i className="fas fa-folder-open text-yellow-400 mr-2"></i> Project Root
          </a>
          <div className="pl-5 space-y-1">
            <a href="#" className="sidebar-link text-gray-800">
              <i className="fas fa-folder text-yellow-400 mr-2"></i> client
            </a>
            <div className="pl-5 space-y-1">
              <a href="#" className="sidebar-link text-gray-700">
                <i className="fas fa-folder text-yellow-400 mr-2"></i> src
              </a>
              <div className="pl-5 space-y-1">
                <a href="#" className="sidebar-link text-gray-600">
                  <i className="fas fa-file-code text-blue-400 mr-2"></i> App.tsx
                </a>
                <a href="#" className="sidebar-link text-gray-600">
                  <i className="fas fa-file-code text-blue-400 mr-2"></i> main.tsx
                </a>
                <a href="#" className="sidebar-link text-gray-600">
                  <i className="fas fa-folder text-yellow-400 mr-2"></i> components/
                </a>
              </div>
            </div>
            <a href="#" className="sidebar-link text-gray-700">
              <i className="fas fa-file-code text-gray-500 mr-2"></i> package.json
            </a>
            <a href="#" className="sidebar-link text-gray-700">
              <i className="fas fa-file-code text-gray-500 mr-2"></i> vite.config.ts
            </a>
          </div>

          <a href="#" className="sidebar-link text-gray-800">
            <i className="fas fa-folder text-yellow-400 mr-2"></i> server
          </a>
          <div className="pl-5 space-y-1">
            <a href="#" className="sidebar-link text-gray-700">
              <i className="fas fa-file-code text-blue-400 mr-2"></i> index.ts
            </a>
            <a href="#" className="sidebar-link text-gray-700">
              <i className="fas fa-folder text-yellow-400 mr-2"></i> routes/
            </a>
            <a href="#" className="sidebar-link text-gray-700">
              <i className="fas fa-folder text-yellow-400 mr-2"></i> api/
            </a>
          </div>

          <a href="#" className="sidebar-link text-gray-700">
            <i className="fas fa-file-code text-gray-500 mr-2"></i> package.json
          </a>
          <a href="#" className="sidebar-link text-gray-700">
            <i className="fas fa-file text-gray-400 mr-2"></i> .env
          </a>
          <a href="#" className="sidebar-link text-gray-700">
            <i className="fas fa-file-alt text-gray-400 mr-2"></i> README.md
          </a>
        </div>
      </div>
    </div>
  );
}
