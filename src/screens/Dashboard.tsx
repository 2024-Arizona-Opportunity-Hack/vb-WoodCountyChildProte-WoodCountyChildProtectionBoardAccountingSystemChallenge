import AddTransactionForm from "../components/AddTransactionForm";
import Navbar from "../components/Navbar";

function Dashboard() {
    return (
        <div className="max-w-7xl m-auto">
            <Navbar />
            <p>Dashboard</p>
            <AddTransactionForm />
        </div>
    );
}

export default Dashboard;