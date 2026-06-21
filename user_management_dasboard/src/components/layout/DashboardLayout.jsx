import Header from "./Header";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-sky-50">
      <Header />

      <main className="mx-auto max-w-7xl p-4 md:p-6">{children}</main>
    </div>
  );
}

export default DashboardLayout;
