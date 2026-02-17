import { Header } from "@/components/layout/header";
import { DataTable } from "@/components/dashboard/data-table";
import { customers } from "@/data/mock/customers";

export default function CustomersPage() {
  return (
    <>
      <Header title="Customers" subtitle="Manage and track all your customers" />
      <div className="p-4 lg:p-6">
        <DataTable customers={customers} />
      </div>
    </>
  );
}
