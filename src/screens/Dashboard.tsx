import AddCategoryForm from "../components/AddCategoryForm";
import AddSourceForm from "../components/AddSourceForm";
import AddTransactionForm from "../components/AddTransactionForm";
import Navbar from "../components/Navbar";
import TransactionTable from "../components/TransactionTable";
import SourceTable from "../components/SourceTable";
import CategoryTable from "../components/CategoryTable";
import BalanceSheet from "../components/BalanceSheet";
import DonorReceipt from "../components/DonorReceipt";
import AddBudgetForm from "../components/AddBudgetForm";
import BudgetChart from "../components/BudgetChart";

function Dashboard() {
  return (
    <div className="max-w-7xl m-auto">
      <Navbar />
      <h1 className="font-extrabold text-3xl p-10">Dashboard</h1>
      <div className="p-5 rounded-xl border-2">
        <h2 className="font-bold text-xl p-2">Add new data</h2>
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

<<<<<<< Updated upstream
          <input
            type="radio"
            name="forms"
            role="tab"
            className="tab"
            aria-label="Add Sources"
          />
          <div role="tabpanel" className="tab-content p-10">
            <AddSourceForm />
          </div>
          <input
            type="radio"
            name="forms"
            role="tab"
            className="tab"
            aria-label="Add budget"
          />
          <div role="tabpanel" className="tab-content p-10">
            <AddBudgetForm />
          </div>
=======
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

            {/* center tabs - display data tables */}
            <div className="p-5 rounded-xl border-2 mt-20">
                <h2 className="font-bold text-xl p-3">Fund Accounting Table</h2>
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Transactions" defaultChecked />
                    <div role="tabpanel" className="tab-content p-10"><TransactionTable /></div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="Source"
                         />
                    <div role="tabpanel" className="tab-content p-10"><SourceTable /></div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Category" />
                    <div role="tabpanel" className="tab-content p-10"><CategoryTable /></div>
                </div>
            </div>

            {/* bottom tabs - donor management */}
            <div className="p-5 rounded-xl border-2 mt-20">
                <h2 className="font-bold text-xl p-3">Reports</h2>
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Balance Sheet" defaultChecked />
                    <div role="tabpanel" className="tab-content p-10"><BalanceSheet /></div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="Income Statement"
                         />
                    <div role="tabpanel" className="tab-content p-10"></div> 
                    {/* <IncomeStatement /> */}

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Donor Receipt" />
                    <div role="tabpanel" className="tab-content p-10"><DonorReceipt /></div>
                </div>
            </div>
>>>>>>> Stashed changes
        </div>
      </div>

      <div className="p-5 rounded-xl border-2 mt-20">
        <h2 className="font-bold text-xl p-2">Financial Data</h2>
        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Fund Accounting Table"
          />
          <div role="tabpanel" className="tab-content p-10">
            <FundAccounting />
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Balance Sheet"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10">
            <BalanceSheet />
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Donor Receipt"
          />
          <div role="tabpanel" className="tab-content p-10">
            <DonorReceipt />
          </div>
        </div>
      </div>
      <div className="p-5 rounded-xl border-2 mt-20">
        <h2 className="font-bold text-xl p-2">Budgets</h2>
        <BudgetChart name={"rent"} used={123} available={1000}  />
      </div>
    </div>
  );
}

export default Dashboard;
