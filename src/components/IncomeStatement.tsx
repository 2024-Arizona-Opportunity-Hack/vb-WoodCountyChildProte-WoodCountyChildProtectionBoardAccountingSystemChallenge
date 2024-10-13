import { useState, useEffect, Suspense } from "react";
import supabase from "../../supabase";

function IncomeStatement() {
  const [unrestrictedRevenue, setUnrestrictedRevenue] = useState<number | undefined>();
  const [unrestrictedExpense, setUnrestrictedExpense] = useState<number | undefined>();
  const [restrictedRevenue, setRestrictedRevenue] = useState<number | undefined>();
  const [restrictedExpense, setRestrictedExpense] = useState<number | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getTransaction();
  }, []);

  async function getTransaction() {
    setIsLoading(true);

    const { data: unrestrictedRevenueRes } = await supabase
      .from("transaction")
      .select("amount.sum()")
      .gte("amount", 0);

    if (unrestrictedRevenueRes) {
      setUnrestrictedRevenue(+unrestrictedRevenueRes[0].sum);
    }

    const { data: unrestrictedExpenseRes } = await supabase
      .from("transaction")
      .select("amount.sum()")
      .lte("amount", 0);

    if (unrestrictedExpenseRes) {
      setUnrestrictedExpense(+unrestrictedExpenseRes[0].sum);
    }

    const { data: restrictedRevenueRes } = await supabase
      .from("transaction")
      .select("amount.sum()")
      .gte("amount", 0);

    if (restrictedRevenueRes) {
      setRestrictedRevenue(+restrictedRevenueRes[0].sum);
    }

    const { data: restrictedExpenseRes } = await supabase
      .from("transaction")
      .select("amount.sum()")
      .lte("amount", 0);

    if (restrictedExpenseRes) {
      setRestrictedExpense(+restrictedExpenseRes[0].sum);
    }

    setIsLoading(false);
  }

  return (
    <>
      <h1 className="text-3xl ml-5 text-center">Unrestricted</h1>
      <div className="flex justify-center">

        <div className="stats shadow">

          <div className="stat place-items-center">
            <div className="stat-title">Revenue</div>
            <div className="stat-value">${isLoading ? <span className="loading loading-dots loading-sm"></span> : unrestrictedRevenue}</div>

          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Expenses</div>
            <div className="stat-value">${isLoading ? <span className="loading loading-dots loading-sm"></span> : unrestrictedExpense}</div>

          </div>
        </div>

      </div>

      <h1 className="text-3xl ml-5 mt-5 text-center">Restricted</h1>

      <div className="flex justify-center">
        <div className="stats shadow">

          <div className="stat place-items-center">
            <div className="stat-title">Revenue</div>
            <div className="stat-value">${isLoading ? <span className="loading loading-dots loading-sm"></span> : restrictedRevenue}</div>

          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Expenses</div>
            <div className="stat-value">${isLoading ? <span className="loading loading-dots loading-sm"></span> : restrictedExpense}</div>

          </div>
        </div>
      </div>
    </>
  );
}

export default IncomeStatement;
