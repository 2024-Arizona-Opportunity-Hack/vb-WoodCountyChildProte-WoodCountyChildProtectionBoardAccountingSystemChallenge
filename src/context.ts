import { Session } from "@supabase/supabase-js";
import React from "react";

type SessionContextType = {
  session: Session;
};

const SessionContext = React.createContext<SessionContextType | undefined>(
  undefined
);

export { SessionContext };
