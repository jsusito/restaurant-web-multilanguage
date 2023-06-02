import { useState } from "react";

export function LabelInput(props) {
    
    
    const [invalid, setInvalid] = useState(false);
    const [classInvalid, setClassInvalid] = useState("valid");
    
    const setCustomValidity = () => {
        
        if(!props.pattern.test(props.currentValue)){
            
            setInvalid(true)
            setClassInvalid("invalid")
            
        }
        else{
            setInvalid(false);
            setClassInvalid("valid")
        }
    };

    
  
    return (
      <>
        <label htmlFor={props.value} className="form-label">
          {props.value}
        </label>
        <input className={"form-control " + classInvalid}
          name={props.value}
          id={props.value}
          type={props.type}
          value={props.currentValue}
          disabled={props.isDisable}
          onChange={(event) => props.onHandleChangue(event.target.value)}
          min={props.min}
          max={props.max}
          onBlur={setCustomValidity}
          required
        />
        { invalid && <div className="text-danger">
          {props.placeholder}
        </div>
        }
      </>
    );
  }
  