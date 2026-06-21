import DashboardLayout from "../components/layout/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="card p-6">
        <h2 className="text-2xl font-semibold text-slate-800">
          Dashboard Ready
        </h2>

        <p className="mt-2 text-slate-600">
          Hooks and reusable components configured successfully.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;