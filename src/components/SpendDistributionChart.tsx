import { PieChart } from "@mui/x-charts";
import supabase from "../../supabase";
import { useEffect } from "react";

export default function SpendDistributionChart() {
  useEffect(() => {
    async function fetchData() {
      supabase.from("")
    }
    fetchData();
  }, [])
  return (
    <div className="max-w-fit border rounded-xl">
      <p className="text-xl text-center">Category Spend Distribution</p>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 100, label: "Rent" },
              { id: 1, value: 1000, label: "Payroll" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  )
}