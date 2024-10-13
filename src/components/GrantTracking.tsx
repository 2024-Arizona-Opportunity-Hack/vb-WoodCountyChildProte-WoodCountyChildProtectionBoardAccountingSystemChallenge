import { useState, useEffect } from "react";
import supabase from "../../supabase";

function GrantTracking() {
    const [donors, setDonors] = useState<Donor[] | null>([]);

    useEffect(() => {
        getDonors();
    }, []);

    async function getDonors() {
        const { data } = await supabase.from('transaction').select(`
		total_donations:amount.sum(),
    ...source(name, type)
	`)
            .not('amount', 'lte', 0)
        // .eq('type', 'donation')
        // .not('type', 'eq', 'grant');

        // console.log(data)
        setDonors(data);
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>total donations</th>
                    </tr>
                </thead>
                <tbody>
                    {donors?.map((donors) => {

                        return (
                            <tr>
                                <th>{donors.name}</th>
                                <td>${donors.total_donations}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default GrantTracking