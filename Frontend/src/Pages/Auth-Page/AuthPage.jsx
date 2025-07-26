import { useSearchParams } from "react-router-dom";
import AuthForms from "../../../Shared/Forms/AuthForms";
import {
  signupSchema,
  loginSchema,
} from "../../../Shared/Validations/AuthSchema.js";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate();
  //getting params:
  const [searchParams, setSearchParams] = useSearchParams();

  const mode = searchParams.get("mode") || "login";

  //Handling switch mode:
  const switchHandler = () => {
    setSearchParams({ mode: mode === "login" ? "signup" : "login" });
  };

  //Handling form submissions:
  const submitHandler = (data) => {
    if (mode === "signup") {
      localStorage.setItem("user", JSON.stringify(data));
      console.log("account created successfully");
      navigate("/");
      console.log(data);
    } else {
      const savedUsers = JSON.parse(localStorage.getItem("user")) || [];

      if (
        savedUsers &&
        savedUsers.email === data.email &&
        savedUsers.password === data.password
      ) {
        console.log("logged in successfully");
        navigate("/");
      } else {
        console.log("logged in failed");
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
