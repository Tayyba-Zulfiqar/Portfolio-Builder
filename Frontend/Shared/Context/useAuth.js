import { AuthContext } from "./Auth-Context.jsx";
import { useContext } from "react";
export default function useAuth() {
  return useContext(AuthContext);
}
