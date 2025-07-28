import { useSearchParams } from "react-router-dom";
import AuthForms from "../../../Shared/Forms/AuthForms";
import {
  signupSchema,
  loginSchema,
} from "../../../Shared/Validations/AuthSchema.js";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Shared/Context/useAuth.js";

export default function AuthPage() {
  const navigate = useNavigate();

  //Context provider:
  const { login, signup } = useAuth();
  //getting params:
  const [searchParams, setSearchParams] = useSearchParams();

  const mode = searchParams.get("mode") || "login";

  //Handling switch mode:
  const switchHandler = () => {
    setSearchParams({ mode: mode === "login" ? "signup" : "login" });
  };

  //Handling form submissions:
  const submitHandler = (userData) => {
    if (mode === "signup") {
      const result = signup(userData);

      if (result.success) {
        console.log(result.message);
        navigate("/templates");
      } else {
        console.log(result.message);
      }
    } else {
      const result = login(userData);
      if (result.success) {
        console.log(result.message);
        navigate("/templates");
      } else {
        console.log(result.message);
      }
    }
  };

  //returning UI:
  return (
    <AuthForms
      mode={mode}
      onSwitch={switchHandler}
      onSubmit={submitHandler}
      schema={mode === "login" ? loginSchema : signupSchema}
    />
  );
}
