import { useState, useEffect, Suspense } from "react";
import supabase from "../../supabase";

function IncomeStatement() {
  // const [revenue, setRevenue] = useState<number | undefined>();
  // const [expense, setExpense] = useState<number | undefined>();
  // // const [revenue, setRevenue] = useState<number | undefined>();
  // // const [expense, setExpense] = useState<number | undefined>();
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   getTransaction();
  // }, []);

  // async function getTransaction() {
  //   setIsLoading(true);
  //   const { data: assetsRes } = await supabase
  //     .from("transaction")
  //     .select("amount.sum()")
  //     .gte("amount", 0);
  //   // console.log(assets)
  //   if (assetsRes) {
  //     setRevenue(+assetsRes[0].sum);
  //   }
  //   const { data: liabilitiesRes } = await supabase
  //     .from("transaction")
  //     .select("amount.sum()")
  //     .lte("amount", 0);
  //   // console.log(liabilities)
  //   if (liabilitiesRes) {
  //     setExpense(+liabilitiesRes[0].sum);
  //   }
  //   const { data: equityRes } = await supabase
  //     .from("transaction")
  //     .select("amount.sum()");
  //   // console.log(equity)
  //   if (equityRes) {
  //     setEquity(+equityRes[0].sum);
  //   }
  //   setIsLoading(false);
  // }

  return (
    <>
      {/* <h1 className="text-3xl ml-5 text-center">Statement of Financial Position</h1>
            <div className="flex justify-center">
                <div className="stats shadow">
                    <div className="stat place-items-center">
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">${isLoading ? <span className="loading loading-dots loading-sm"></span> : revenue}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Expenses</div>
                        <div className="stat-value">${isLoading ? <span className="loading loading-dots loading-sm"></span> : expense}</div>

                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Net Assets (Equity)</div>
                        <div className="stat-value">${isLoading ? <span className="loading loading-dots loading-sm"></span> : equity}</div>
                    </div>
                </div>
            </div> */}
    </>
  );
}

export default IncomeStatement;
