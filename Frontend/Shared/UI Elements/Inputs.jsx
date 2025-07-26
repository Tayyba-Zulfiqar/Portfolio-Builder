import "./Inputs.css";
import { AlertCircle } from "lucide-react";
export default function Inputs(props) {
  const { register } = props;
  return (
    <>
      <div className="input-group">
        <input
          type={props.type}
          id={props.id}
          className="form-input"
          placeholder={props.placeholder}
          {...register(props.name)}
          required
        />
        <label htmlFor={props.id} className="form-label">
          {props.placeholder}
        </label>
        {props.error && (
          <div className="error-container">
            <p className="error-text">{props.error.message}</p>
          </div>
        )}
      </div>
    </>
  );
}
