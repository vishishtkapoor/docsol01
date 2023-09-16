import Header from "./Header"
import Sidebar from "./Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grow flex flex-row h-full">
      <Sidebar />
      <div className="grow flex flex-col overflow-y-auto w-full">
        <Header />
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}