import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { formCreator, Input } from '../common/FormControl'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import s from './../common/FormControl.module.css'


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {

    return <div>
        <form onSubmit={handleSubmit} >
            {formCreator('email', 'email', Input, [required])}
            {formCreator('Password', 'password', Input, [required], { type: 'password' })}
            {formCreator(null, 'rememberMe', Input, [], { type: "checkbox" }, "Remember")}
            {/* <div>
                <Field placeholder={'email'} name={'email'} component={Input} validate={[required]} />
            </div> */}
            {/* <div>
            <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]} type={'password'}/>
            </div> */}
            {/* <div>
            <Field type={"checkbox"} name={'rememberMe'} component={Input } /> 
            </div> */}
            {captchaUrl && <img src={captchaUrl} alt="captcha" />}
            {captchaUrl && formCreator("Symbols from Image", 'captcha', Input, [required])}
            {error && <div className={s.summeryError}>{error} </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
export const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/Profile"} />
    }
    return (
        <div>
            <h1>PLEASE  LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps, { login })(Login);