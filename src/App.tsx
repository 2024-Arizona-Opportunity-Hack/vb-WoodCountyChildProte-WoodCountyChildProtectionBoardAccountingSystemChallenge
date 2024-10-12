import { createClient } from "@supabase/supabase-js";

function App() {
  const supabaseUrl = "https://zyfeuwmhjyybilebrnnl.supabase.co";
  const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5ZmV1d21oanl5YmlsZWJybm5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3NjA4NTAsImV4cCI6MjA0NDMzNjg1MH0.3u-Tr1P__QeVdgj2t7lDpw3Z8nUzh-P_tkdqkMcCQIw";
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
