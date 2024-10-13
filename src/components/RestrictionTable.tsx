import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { Restriction } from "../../types";

function RestrictionTable() {
  const [restrictions, setCategory] = useState<Restriction[] | null>([]);

  useEffect(() => {
    getRestrictions();
  }, []);

  async function getRestrictions() {
    const { data } = await supabase.from("restriction").select();
    setCategory(data);
  }

  async function deleteCategory(categoryId: number) {
    const { error } = await supabase
      .from("restriction")
      .delete()
      .eq("id", categoryId);
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
            <th>category_id</th>
            <th>source_id</th>
          </tr>
        </thead>
        <tbody>
          {restrictions?.map((restriction) => {
            return (
              <tr key={restriction.id}>
                <th>{restriction.id}</th>
                <td>{restriction.name}</td>
                <td>{restriction.category_id}</td>
                <td>{restriction.source_id}</td>
                <td>
                  <button
                    className="btn btn-error"
                    onClick={() => deleteCategory(restriction.id)}
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

export default RestrictionTable;
