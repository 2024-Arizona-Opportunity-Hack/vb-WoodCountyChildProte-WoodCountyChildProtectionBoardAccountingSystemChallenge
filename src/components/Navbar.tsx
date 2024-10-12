import { useContext } from "react";
import { SessionContext } from "../context";
import supabase from "../../supabase";

function Navbar() {
  const superbaseCtx = useContext(SessionContext);
  const session = superbaseCtx;

  return (
    <div className="navbar rounded-full bg-base-300 mt-2">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">
          Wood County Child Protection Board
        </a>
      </div>
      <div className="navbar-end">
        <button
          className="btn bg-base-100"
          onClick={async () => {
            const { error } = await supabase.auth.signOut();
            console.log(error);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
