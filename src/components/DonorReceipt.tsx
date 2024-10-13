import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { Donor } from "../../types"

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
                {/* Donor Select */}
                {/* <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Source</span>
                    </div>
                    <select
                        className="select select-bordered"
                        value={values.source_id}
                        onChange={handleInputChange}
                        name="source_id"
                    >
                        <option disabled selected value="">
                            Pick one
                        </option>
                        {source?.map((source) => {
                            return (
                                <option value={source.id} key={source.id}>
                                    {`${source.type}:${source.name}`}
                                </option>
                            );
                        })}
                    </select>
                </label> */}

                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>amount・date・description・published_date</th>
                            {/* <th>date</th>
                            <th>description</th>
                            <th>published_date</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {donors?.map((donors) => {

                            return (
                                <tr key={donors.id}>
                                    <th>{donors.id}</th>
                                    <td>{donors.name}</td>
                                    {donors.transaction?.map((donors) => {

                                        return (
                                            <tr key={donors.id}>
                                                <td>{donors.amount}</td>
                                                <td>{donors.date}</td>
                                                <td>{donors.description}</td>
                                                <td>{donors.published_date}</td>
                                            </tr>
                                        )
                                    })}
                                    {/* <td>{donors.amount}</td>
                                    <td>{donors.date}</td>
                                    <td>{donors.description}</td>
                                    <td>{donors.published_date}</td> */}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

export default DonorReceipt