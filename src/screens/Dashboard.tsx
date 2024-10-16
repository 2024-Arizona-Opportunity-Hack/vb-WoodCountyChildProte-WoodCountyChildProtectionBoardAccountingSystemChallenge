import AddCategoryForm from "../components/AddCategoryForm";
import AddSourceForm from "../components/AddSourceForm";
import AddTransactionForm from "../components/AddTransactionForm";
import Navbar from "../components/Navbar";
import TransactionTable from "../components/TransactionTable";
import SourceTable from "../components/SourceTable";
import CategoryTable from "../components/CategoryTable";
import DonorReceipt from "../components/DonorReceipt";
import AddBudgetForm from "../components/AddBudgetForm";
import IRSFiling from "../components/IRSFiling";
import IncomeStatement from "../components/IncomeStatement";
import BudgetChartList from "../components/BudgetChartList";
import AddRestrictionForm from "../components/AddRestrictionForm";
import RestrictionTable from "../components/RestrictionTable";
import BalanceSheet from "../components/BalanceSheet";

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
                    <div role="tabpanel" className="tab-content p-10 max-w-6xl">
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
                    <input
                        type="radio"
                        name="forms"
                        role="tab"
                        className="tab"
                        aria-label="Add restriction"
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <AddRestrictionForm />
                    </div>
                </div>
            </div>

            {/* 2nd set of tabs - display data tables */}
            <div className="p-5 rounded-xl border-2 mt-20">
                <h2 className="font-bold text-xl p-3">Fund Accounting Table</h2>
                <div role="tablist" className="tabs tabs-bordered">
                    <input
                        type="radio"
                        name="tables"
                        role="tab"
                        className="tab"
                        aria-label="Transactions"
                        defaultChecked
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <TransactionTable />
                    </div>

                    <input
                        type="radio"
                        name="tables"
                        role="tab"
                        className="tab"
                        aria-label="Sources"
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <SourceTable />
                    </div>

                    <input
                        type="radio"
                        name="tables"
                        role="tab"
                        className="tab"
                        aria-label="Categories"
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <CategoryTable />
                    </div>

                    <input
                        type="radio"
                        name="tables"
                        role="tab"
                        className="tab"
                        aria-label="Restrictions"
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <RestrictionTable />
                    </div>
                </div>
            </div>

            <input
                type="radio"
                name="reports"
                role="tab"
                className="tab"
                aria-label="Income Statement"
            />
            <div role="tabpanel" className="tab-content p-10"><IncomeStatement /></div>

            {/* 3rd set of tabs - donor management */}
            <div className="p-5 rounded-xl border-2 mt-20">
                <h2 className="font-bold text-xl p-3">Reports</h2>
                <div role="tablist" className="tabs tabs-bordered">
                    <input
                        type="radio"
                        name="reports"
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
                        name="reports"
                        role="tab"
                        className="tab"
                        aria-label="Income Statement"
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <IncomeStatement />
                    </div>

                    <input
                        type="radio"
                        name="reports"
                        role="tab"
                        className="tab"
                        aria-label="Donation Details"
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <DonorReceipt />
                    </div>
                </div>
            </div>

            {/*  4th set of tabs - irs filings */}
            <div className="p-5 rounded-xl border-2 mt-20">
                <h2 className="font-bold text-xl p-3">IRS Filings</h2>
                {/* <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="reports" role="tab" className="tab" aria-label="Balance Sheet" defaultChecked />
                    <div role="tabpanel" className="tab-content p-10"><BalanceSheet /></div>

                    <input
                        type="radio"
                        name="reports"
                        role="tab"
                        className="tab"
                        aria-label="Income Statement"
                    />
                    <div role="tabpanel" className="tab-content p-10"><IncomeStatement /></div>
                    <input type="radio" name="reports" role="tab" className="tab" aria-label="Donor Receipt" />
                    <div role="tabpanel" className="tab-content p-10"><DonorReceipt /></div>
                </div> */}
                <IRSFiling />
            </div>


            <BudgetChartList />

        </div >
    );
}

export default Dashboard;
