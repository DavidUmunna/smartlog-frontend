import Dashboad from "./index"
import { MainNav } from "../../components/main-nav" // or "../components/main-nav"
import { DocsSidebar } from "../../components/DocsSidebar"

export default function Header() {
  return (
    <>
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold">SmartLog</h1>
      <MainNav
        items={[
          { href: "/", label: "Dashboard" },
          { href: "/#", label: "attendance" },
          { href: "/##", label: "step out" },
          { href: "/###", label: "sign out" },
        ]}
      />
    </header>

    <div className="flex  min-h-screen">
        <div className="w-1/5">

        <DocsSidebar
        tree={{children: [
            {
                $id: "1",
                name: "Getting Started",
                type: "folder",
                children: [
                    { $id: "1.1", name: "Intro", type: "page", url: "/#####" },
                    { $id: "1.2", name: "Setup", type: "page", url: "/####" },
                ],
            },
        ]}}/>
        </div>
        <div className="w-4/5">

        <Dashboad/>
        </div>
    </div>
    </>
  )
}
