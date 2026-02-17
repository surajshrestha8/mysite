"use client";

import { useState, useMemo } from "react";
import { Customer, Plan, Status } from "@/data/mock/customers";
import { Badge } from "@/components/ui/badge";
import { ChevronUp, ChevronDown, ChevronsUpDown, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

type SortField = "name" | "plan" | "status" | "mrr" | "joined";
type SortDir = "asc" | "desc";

const planVariant: Record<Plan, "default" | "info" | "success"> = {
  Starter: "info",
  Pro: "default",
  Enterprise: "success",
};

const statusVariant: Record<Status, "success" | "danger" | "warning"> = {
  Active: "success",
  Churned: "danger",
  Trial: "warning",
};

const ROWS_PER_PAGE = 10;

interface DataTableProps {
  customers: Customer[];
}

export function DataTable({ customers }: DataTableProps) {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [page, setPage] = useState(1);
  const [filterPlan, setFilterPlan] = useState<Plan | "All">("All");
  const [filterStatus, setFilterStatus] = useState<Status | "All">("All");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("asc");
    }
    setPage(1);
  };

  const filtered = useMemo(() => {
    return customers
      .filter((c) => {
        const q = search.toLowerCase();
        const matchSearch = c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.company.toLowerCase().includes(q);
        const matchPlan = filterPlan === "All" || c.plan === filterPlan;
        const matchStatus = filterStatus === "All" || c.status === filterStatus;
        return matchSearch && matchPlan && matchStatus;
      })
      .sort((a, b) => {
        let av: string | number = a[sortField];
        let bv: string | number = b[sortField];
        if (sortField === "mrr") { av = a.mrr; bv = b.mrr; }
        if (typeof av === "string") av = av.toLowerCase();
        if (typeof bv === "string") bv = bv.toLowerCase();
        if (av < bv) return sortDir === "asc" ? -1 : 1;
        if (av > bv) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
  }, [customers, search, sortField, sortDir, filterPlan, filterStatus]);

  const totalPages = Math.ceil(filtered.length / ROWS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ROWS_PER_PAGE, page * ROWS_PER_PAGE);

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ChevronsUpDown size={13} className="text-muted-foreground" />;
    return sortDir === "asc"
      ? <ChevronUp size={13} className="text-primary" />
      : <ChevronDown size={13} className="text-primary" />;
  };

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Filters */}
      <div className="p-4 border-b border-border flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm text-muted-foreground flex-1 max-w-xs">
          <Search size={14} />
          <input
            type="text"
            placeholder="Search name, email, company..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={filterPlan}
            onChange={(e) => { setFilterPlan(e.target.value as Plan | "All"); setPage(1); }}
            className="h-9 rounded-md border border-border bg-background px-2 text-sm text-foreground outline-none cursor-pointer"
          >
            <option value="All">All Plans</option>
            <option value="Starter">Starter</option>
            <option value="Pro">Pro</option>
            <option value="Enterprise">Enterprise</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => { setFilterStatus(e.target.value as Status | "All"); setPage(1); }}
            className="h-9 rounded-md border border-border bg-background px-2 text-sm text-foreground outline-none cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Trial">Trial</option>
            <option value="Churned">Churned</option>
          </select>
        </div>

        <span className="text-xs text-muted-foreground ml-auto">
          {filtered.length} customers
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort("name")}
                  className="flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Customer <SortIcon field="name" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort("plan")}
                  className="flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Plan <SortIcon field="plan" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort("status")}
                  className="flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Status <SortIcon field="status" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort("mrr")}
                  className="flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  MRR <SortIcon field="mrr" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort("joined")}
                  className="flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Joined <SortIcon field="joined" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-muted-foreground text-sm">
                  No customers match your search.
                </td>
              </tr>
            ) : (
              paginated.map((c) => (
                <tr key={c.id} className="hover:bg-muted/40 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                        style={{ background: c.avatarColor }}
                      >
                        {c.avatarInitials}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{c.name}</p>
                        <p className="text-xs text-muted-foreground">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={planVariant[c.plan]}>{c.plan}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={statusVariant[c.status]}>{c.status}</Badge>
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground">
                    {c.mrr > 0 ? `$${c.mrr}` : "—"}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {format(new Date(c.joined), "MMM d, yyyy")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-border">
          <span className="text-xs text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-md transition-colors",
                page === 1
                  ? "text-muted-foreground/40 cursor-not-allowed"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <ChevronLeft size={15} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => Math.abs(p - page) <= 2)
              .map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition-colors",
                    p === page
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {p}
                </button>
              ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-md transition-colors",
                page === totalPages
                  ? "text-muted-foreground/40 cursor-not-allowed"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
