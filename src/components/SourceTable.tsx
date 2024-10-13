import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { Source } from "../../types";

function SourceTable() {
  const [source, setSource] = useState<Source[] | null>([]);

  useEffect(() => {
    getSource();
  }, []);

  async function getSource() {
    const { data } = await supabase.from("source").select();
    setSource(data);
  }

  async function deleteSource(sourceId: number) {
    const { error } = await supabase.from("source").delete().eq("id", sourceId);
    if (error === null) {
      window.location.reload();
    }
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
                <td>
                  <button
                    className="btn btn-error"
                    onClick={() => deleteSource(source.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SourceTable;
