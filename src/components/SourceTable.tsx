import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { Source } from "../../types"

function SourceTable() {
    const [source, setSource] = useState<Source[] | null>([]);

    useEffect(() => {
        getSource();
    }, []);

    async function getSource() {
        const { data } = await supabase.from("source").select();
        //   console.log(data)
        setSource(data);
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>type</th>
                    </tr>
                </thead>
                <tbody>
                    {source?.map((source) => {

                        return (
                            <tr key={source.id}>
                                <th>{source.id}</th>
                                <td>{source.name}</td>
                                <td>{source.type}</td>
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

export default SourceTable