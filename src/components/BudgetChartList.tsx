import { useState, useEffect } from "react";
import supabase from "../../supabase";
import BudgetChart from "../components/BudgetChart";

type UsedBudget = {
    type: string;
    used: number;
    total: number;
  };

function BudgetChartList() {
    const [budgets, setBudgets] = useState<any | null>([]);
    const [used, setUsed] = useState<any | null>([]);
    const [usedBudgets, setUsedBudgets] = useState<UsedBudget[] | null>([]);

    useEffect(() => {
        getBudget();
        getUsed();

        const usedBudgets = budgets?.map((item1: any) => {
            const matchingItem = used?.find((item2: any) => item2.type === item1.type);

            if (matchingItem) {
                return { ...item1, ...matchingItem };
            } else {
                return item1;
            }
        });

        setUsedBudgets(usedBudgets);

        console.log(usedBudgets)
    }, []);

    
    async function getBudget() {
        const res = await supabase.from('transaction').select(`
            used:amount.sum(),
        ...category(type)`)
            .lte('amount', 0);
        
            setBudgets(res?.data);

        // console.log(data)
        
    }

    async function getUsed() {
        const { data } = await supabase.from('budget').select(`
            total:amount,
        ...category(type)`)

        // console.log(data)
        setUsed(data);
    }

    return (
        <div className="p-5 rounded-xl border-2 mt-20">
            <h2 className="font-bold text-xl p-2">Budgets</h2>
            {usedBudgets?.map((usedBudget) => {
                // const filteredBudgets = used?.filter(val => val.type === budget.type)

                // console.log(filteredBudgets && filteredBudgets)

                return <BudgetChart key={usedBudget.type} name={usedBudget.type} used={-1 * usedBudget.used} available={usedBudget.used + usedBudget.total} />
                //  + filteredBudgets?.used
            })
            }
        </div>
    );
}

export default BudgetChartList