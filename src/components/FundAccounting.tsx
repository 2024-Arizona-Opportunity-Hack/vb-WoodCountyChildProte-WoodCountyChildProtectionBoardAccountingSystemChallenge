import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { Transaction } from "../../types"

function FundAccounting() {
    const [transactions, setTransactions] = useState<Transaction[] | null>([]);

    useEffect(() => {
        getTransaction();
    }, []);

    async function getTransaction() {
        const { data } = await supabase.from("transaction").select();
        //   console.log(data)
        setTransactions(data);
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>amount</th>
                        <th>source_id</th>
                        <th>category_id</th>
                        <th>date</th>
                        <th>description</th>
                        <th>published_date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions?.map((transaction) => {

                        return (
                            <tr>
                                <th>{transaction.id}</th>
                                <td>{transaction.amount}</td>
                                <td>{transaction.source_id}</td>
                                <td>{transaction.category_id}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.description}</td>
                                <td>{transaction.published_date}</td>

                            </tr>
                        )
                    })}
                </tbody>
                {/* <tfoot>
                    <tr>
                        <th>id</th>
                        <th>amount</th>
                        <th>source_id</th>
                        <th>category_id</th>
                        <th>date</th>
                        <th>description</th>
                        <th>published_date</th>
                    </tr>
                </tfoot> */}
            </table>
        </div>
    );
}

export default FundAccounting