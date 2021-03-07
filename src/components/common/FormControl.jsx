import React from "react";
import { Field } from "redux-form";
import s from "./FormControl.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
    let hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : + ' ')} >
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    let { input, meta, ...restprops } = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restprops} />
        </FormControl >
    )
}
export const Input = (props) => {
    let { input, meta, ...restprops } = props
    return (
        <FormControl {...props}>
            <input {...input} {...restprops} />
        </FormControl >
    )
}
export const formCreator = (placeholder, name, component, [validators], props = {}, text = '') => {
    return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props} />
        {text}
    </div>
}






