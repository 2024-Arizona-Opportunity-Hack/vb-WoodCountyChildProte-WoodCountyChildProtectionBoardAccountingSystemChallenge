import { useEffect, useState } from "react";
import supabase from "../../supabase";
import { Category } from "../../types";

const initialValues = {
  amount: "",
  category_id: "",
  name: "",
};

function AddBudgetForm() {
  const [categories, setCategories] = useState<Category[] | null>([]);
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data: categoryRes } = await supabase.from("category").select();
      setCategories(categoryRes);
    }
    fetchData();
  }, []);

  function handleInputChange(e: any) {
    setError("");
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  async function handleSubmit() {
    setError("");
    setSuccess("");
    const { error } = await supabase.from("budget").insert(values);
    if (error) {
      console.log(error);
      setError(error.message);
      return;
    }
    setSuccess("Budget added!");
    setValues(initialValues);
  }

  return (
    <>
      {error.length > 0 && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! {error}.</span>
        </div>
      )}
      {success.length > 0 && (
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{success}</span>
        </div>
      )}
      <div className="flex flex-row space-x-2 items-end">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Amount</span>
          </div>
          <input
            type="number"
            placeholder="+/-1000.00"
            className="input input-bordered w-full max-w-xs"
            value={values.amount}
            onChange={handleInputChange}
            name="amount"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Category</span>
          </div>
          <select
            className="select select-bordered"
            value={values.category_id}
            onChange={handleInputChange}
            name="category_id"
          >
            <option disabled selected value="">
              Pick one
            </option>
            {categories?.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.type}
                </option>
              );
            })}
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <input
            type="text"
            placeholder="Give it a name"
            className="input input-bordered w-full max-w-xs"
            value={values.name}
            onChange={handleInputChange}
            name="name"
          />
        </label>
        <button className="btn" onClick={() => handleSubmit()}>
          Add+
        </button>
      </div>
    </>
  );
}

export default AddBudgetForm;
