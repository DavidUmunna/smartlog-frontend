import { Outlet } from "react-router-dom"
import { MainNav } from "./main-nav"
import { DocsSidebar } from "./DocsSidebar"

export default function AdminLayout() {
  return (
    <>
      <header className="flex items-center justify-between px-2 py-2">
        <h1 className="text-xl font-bold">SmartLog</h1>
        <MainNav
          items={[
            { to: "/admin/dashboard", label: "Dashboard" },
            { to: "/admin/attendance", label: "Attendance" },
            { to: "/##", label: "step out" },
            { to: "/###", label: "sign out" },
          ]}
        />
      </header>

      <div className="flex min-h-screen">
        <div className="w-1/5">
          <DocsSidebar
            tree={{
              children: [
                {
                  $id: "1",
                  name: "Human Resources",
                  type: "folder",
                  children: [
                    { $id: "1.1", name: "Leave Management", type: "page", url: "/admin/leavemanagement" },
                    { $id: "1.2", name: "Remote Work Management", type: "page", url: "/####" },
                  ],
                },
              ],
            }}
          />
        </div>
        <div className="w-full  bg-gray-300 min-h-full">
          <div className="w-4/5 mx-auto">
            <Outlet /> 
          </div>
        </div>
      </div>
    </>
  );
}
