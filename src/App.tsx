import "./index.css";
import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { SessionContext } from "./context";
import Dashboard from "./screens/Dashboard";
import FundAccounting from "./components/FundAccounting";
import BalanceSheet from "./components/BalanceSheet";
import supabase from "../supabase"

function App() {

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="max-w-5xl m-auto mt-10">
        <h1 className="text-3xl ml-5">Login / Signup</h1>
        <div className="max-w-4xl m-auto rounded-md border p-5 mt-10">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <SessionContext.Provider value={{ session }}>
          <Dashboard />
          {/* <FundAccounting /> */}
          <BalanceSheet />
      </SessionContext.Provider>
    );
  }
}

export default App;
