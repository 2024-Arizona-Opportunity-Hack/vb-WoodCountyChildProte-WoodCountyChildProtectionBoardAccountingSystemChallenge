import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { Category } from "../../types";

function CategoryTable() {
  const [category, setCategory] = useState<Category[] | null>([]);

  useEffect(() => {
    getCategory();
  }, []);

  async function getCategory() {
    const { data } = await supabase.from("category").select();
    //   console.log(data)
    setCategory(data);
  }

  async function deleteCategory(categoryId: number) {
    const { error } = await supabase
      .from("category")
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
            <th>type</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {category?.map((category) => {
            return (
              <tr key={category.id}>
                <th>{category.id}</th>
                <td>{category.type}</td>
                <td>{category.description}</td>
                <td>
                  <button
                    className="btn btn-error"
                    onClick={() => deleteCategory(category.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
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

export default CategoryTable;
