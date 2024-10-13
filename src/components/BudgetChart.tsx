import { PieChart } from "@mui/x-charts/PieChart";
function BudgetChart({name, used, available}: {name: string, used: number, available: number}) {
  return (
    <div className="max-w-fit border rounded-xl">
      <p className="text-xl text-center">{name}</p>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: used, label: "Used" },
              { id: 1, value: available, label: "Free" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
}

export default BudgetChart;
