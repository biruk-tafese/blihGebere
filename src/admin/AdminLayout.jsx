// --- AdminLayout Component ---
const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar /> {/* Your sidebar component */}
      <div className="flex flex-col flex-1">
        <DashboardNavbar /> {/* Your top navbar */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet /> {/* This is where your content pages will render */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;