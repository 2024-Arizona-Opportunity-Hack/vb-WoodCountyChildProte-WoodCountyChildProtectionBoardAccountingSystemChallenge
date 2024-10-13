import { useState, useEffect } from "react";
import supabase from "../../supabase";

function DonorReceipt() {
    const [donors, setDonors] = useState<Donor[] | null>([]);

    useEffect(() => {
        getDonors();
    }, []);

    async function getDonors() {
        const { data } = await supabase.from('source').select(`id, name, transaction(
            amount, date, description, published_date
        )`)
        // .not('amount', 'lte', 0)
        .eq('type', 'donation');
        // .not('type', 'eq', 'grant');

        console.log(data)
        setDonors(data);
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
            <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>amount</th>
                        <th>date</th>
                        <th>description</th>
                        <th>published_date</th>
                    </tr>
                </thead>
                <tbody>
                    {donors?.map((donors) => {

                        return (
                            <tr key={donors.id}>
                                <th>{donors.id}</th>
                                <td>{donors.name}</td>
                                <td>{donors.amount}</td>                                
                                <td>{donors.date}</td>
                                <td>{donors.description}</td>
                                <td>{donors.published_date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DonorReceipt