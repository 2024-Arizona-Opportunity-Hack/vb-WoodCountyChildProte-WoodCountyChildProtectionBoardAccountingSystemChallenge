import AddCategoryForm from "../components/AddCategoryForm";
import AddSourceForm from "../components/AddSourceForm";
import AddTransactionForm from "../components/AddTransactionForm";
import Navbar from "../components/Navbar";
import FundAccounting from "../components/FundAccounting";
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

            <div className="p-5 rounded-xl border-2">
                <h2 className="font-bold text-xl p-2">Financial Data</h2>
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Fund Accounting Table" />
                    <div role="tabpanel" className="tab-content p-10"><FundAccounting /></div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="Balance Sheet"
                        defaultChecked />
                    <div role="tabpanel" className="tab-content p-10"><BalanceSheet /></div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Donor Receipt" />
                    <div role="tabpanel" className="tab-content p-10">Tab 3 Content</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
