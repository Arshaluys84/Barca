export const required = (values) => {
    if (values) return undefined;
    return "Field is Required"
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length < maxLength) return undefined;
    return `There can be less than ${maxLength} symbols`
}