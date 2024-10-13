import { useContext, useEffect, useState } from "react";
import supabase from "../../supabase";
import { Category, Source } from "../../types";
import { SessionContext } from "../context";

const initialValues = {
  source_id: "",
  category_id: "",
  name: "",
};

function AddRestrictionForm() {
  const [categories, setCategories] = useState<Category[] | null>([]);
  const [source, setSource] = useState<Source[] | null>([]);
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sessionCtx = useContext(SessionContext);

  useEffect(() => {
    async function fetchData() {
      const { data: sourceRes } = await supabase.from("source").select();
      const { data: categoryRes } = await supabase.from("category").select();
      setCategories(categoryRes);
      setSource(sourceRes);
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
    const { error } = await supabase.from("restriction").insert(values);
    if (error) {
      console.log(error);
      setError(error.message);
      return;
    }
    setSuccess("Restriction added!");
    setValues(initialValues);
    sessionCtx?.setRefresh(!sessionCtx.refresh);
    window.location.reload();
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
      <div>
        <div className="flex flex-row space-x-2 items-end">
          <label className="form-control w-full max-w-xs">
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
      </div>
    </>
  );
}

export default AddRestrictionForm;
