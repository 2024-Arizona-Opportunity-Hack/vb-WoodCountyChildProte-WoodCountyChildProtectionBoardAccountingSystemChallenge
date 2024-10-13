import { useState } from "react";
import supabase from "../../supabase";

const initialValues = {
  type: "",
  description: "",
};

function AddCategoryForm() {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
    if (values.description === "" || values.type === "") {
      setError("Please fill out all values in the form");
      return;
    }
    const { error } = await supabase.from("category").insert(values);
    if (error) {
      console.log(error);
      setError(error.message);
      return;
    }
    setSuccess("Category added!");
    setValues(initialValues);
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
      <div className="flex flex-row space-x-2 items-end">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Type</span>
          </div>
          <input
            type="text"
            placeholder="what type of funding is it?"
            className="input input-bordered w-full max-w-xs"
            value={values.type}
            onChange={handleInputChange}
            name="type"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <input
            type="text"
            placeholder="A little bit more"
            className="input input-bordered w-full max-w-xs"
            value={values.description}
            onChange={handleInputChange}
            name="description"
          />
        </label>
        <button className="btn" onClick={() => handleSubmit()}>
          Add+
        </button>
      </div>
    </>
  );
}

export default AddCategoryForm;
