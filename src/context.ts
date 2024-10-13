import { Session } from "@supabase/supabase-js";
import React from "react";


type SessionContextType = {
  session: Session | undefined;
  refresh: boolean,
  setRefresh: (newValue: boolean) => void;
};

const SessionContext = React.createContext<SessionContextType | undefined>(
  undefined
);

export { SessionContext };
