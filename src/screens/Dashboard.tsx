import AddCategoryForm from "../components/AddCategoryForm";
import AddSourceForm from "../components/AddSourceForm";
import AddTransactionForm from "../components/AddTransactionForm";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="max-w-7xl m-auto">
      <Navbar />
      <p>Dashboard</p>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="forms"
          role="tab"
          className="tab"
          aria-label="Add Transactions"
        />
        <div role="tabpanel" className="tab-content p-10">
          <AddTransactionForm />
        </div>

        <input
          type="radio"
          name="forms"
          role="tab"
          className="tab"
          aria-label="Add Categories"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          <AddCategoryForm />
        </div>

        <input
          type="radio"
          name="forms"
          role="tab"
          className="tab"
          aria-label="Add Funding Sources"
        />
        <div role="tabpanel" className="tab-content p-10">
          <AddSourceForm />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
