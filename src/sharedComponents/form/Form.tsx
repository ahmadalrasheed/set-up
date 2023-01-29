import React, { useEffect } from "react";
import {
  FormContainer,
  Body,
  FormRow,
  FormElement,
  FormRowsContainer,
  FormButtonContainer,
  FormTitle,
} from "./Theme";
import { InputController, Button } from "../";
import { useForm } from "react-hook-form";
import { JsxElement } from "typescript";

interface CustomValidation {
  value?: string | number | RegExp;
  message?: string;
}

interface ValidationInfo {
  required?: string | boolean;
  valueAsNumber?: boolean;
  valueAsDate?: boolean;
  disabled?: boolean;
  min?: CustomValidation | number;
  pattern?: CustomValidation | number;
  setValueAs?: Function;
  maxLength?: CustomValidation | number;
  minLength?: CustomValidation | number;
  max?: CustomValidation | number;
}
interface RowDetails {
  tag?: string;
  type?: string;
  name?: string;
  label?: string;
  placeHolder?: string;
  eleClassName?: string;
  id?: string;
  validation?: ValidationInfo;
  component?: React.ReactNode;
}

interface Rows {
  [key: string]: RowDetails[];
}

interface FormDetails {
  row: Rows;
}
type Title = string | React.ReactNode;

interface DefaultValues {
  [key: string]: string | number;
}

interface FormInfo {
  formData: FormDetails;
  getResult?: Function;
  title?: Title;
  defaultValues?: DefaultValues;
  className?: string;
}
export const Form = ({
  formData,
  getResult,
  title,
  defaultValues,
  className,
}: FormInfo) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<any>({
    mode: "onChange",
    delayError: 300,
    defaultValues: defaultValues,
  });
  const smartFormData = Object.values(Object.values(formData)["0"]);
  const omSubmitForm = (data: any) => {
    getResult && getResult(data);
  };
  const RenderForm = (formData: FormDetails, title: Title): JSX.Element => {
    return (
      <Body className={className}>
        {title && typeof title == "string" ? (
          <FormTitle>{title}</FormTitle>
        ) : (
          title
        )}
        <FormContainer onSubmit={handleSubmit(omSubmitForm)}>
          <>
            {smartFormData.map((formRow: any, rowKey: number) => {
              return (
                <FormRowsContainer key={rowKey}>
                  {formRow.map((htmlElement: any, eleKey: number) => {
                    return (
                      <FormRow
                        key={eleKey}
                        className={htmlElement.eleClassName}
                      >
                        {!htmlElement.component ? (
                          <FormElement>
                            {htmlElement.tag == "input" ? (
                              <InputController
                                className="my-input"
                                id={htmlElement.id && htmlElement.id}
                                placeHolder={
                                  htmlElement.placeHolder &&
                                  htmlElement.placeHolder
                                }
                                type={htmlElement.type}
                                name={htmlElement.name}
                                label={htmlElement.label}
                                required={htmlElement.validation?.required}
                                errors={errors}
                                validation={htmlElement.validation}
                                register={{ register: register }}
                              />
                            ) : null}
                          </FormElement>
                        ) : (
                          htmlElement.component
                        )}
                      </FormRow>
                    );
                  })}
                </FormRowsContainer>
              );
            })}

            <FormButtonContainer>
              <Button text="Submit" disabled={!isValid}>
                <span>+</span>
              </Button>
            </FormButtonContainer>
          </>
        </FormContainer>
      </Body>
    );
  };

  return <>{RenderForm(formData, title as Title)}</>;
};

export default Form;
