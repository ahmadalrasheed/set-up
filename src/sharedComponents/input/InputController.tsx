import React, { FunctionComponent } from "react";
import {
  InputElement,
  Label,
  InputElementContainer,
  EyeContainer,
  Body,
} from "./Theme";
import { ReactComponent as FilledEye } from "../assets/eye-fill.svg";
import { ReactComponent as ShowPassEye } from "../assets/eye-show-pass.svg";


interface InputControllerInfo {
  type: string;
  name: string;
  label?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  placeHolder?: string;
  register?: any;
  required?: boolean;
  errors?: any;
  validation?: any;
}

export const InputController: FunctionComponent<InputControllerInfo> = ({
  type,
  name,
  label,
  id,
  className,
  disabled,
  value,
  defaultValue,
  placeHolder,
  register,
  required,
  errors,
  validation,
  ...rest
}) => {
  const inputRef = React.useRef<any>();
  const [filledEye, setFilledEye] = React.useState<boolean>(true);
  const handleEyeClick = () => {
    
    if (typeof(id) =='string' && document.getElementById(id) && document.getElementById(id)?.getAttribute('type') =="password") {
      document.getElementById(id)?.setAttribute('type','text')
      
      setFilledEye(false);
    } else if (typeof(id) =='string' && document.getElementById(id)) {
      document.getElementById(id)?.setAttribute('type','password')

      setFilledEye(true);
    }
  };
  return (
    <Body>
      <InputElementContainer className={className}>
        <Label for={id} required={required}>{label}</Label>
        <InputElement
          type={type}
          name={name}
          id={id && id}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeHolder}
          ref={inputRef}
          {...register?.register(name, validation && validation)}
        />
        {type == "password" && (
          <EyeContainer>
            {filledEye ? (
              <ShowPassEye onClick={() => handleEyeClick()} />
            ) : (
              <FilledEye onClick={() => handleEyeClick()} />
            )}
          </EyeContainer>
        )}
      </InputElementContainer>
      {<p>{errors && errors[name]?.message}</p>}
    </Body>
  );
};

export default InputController;
