import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export const withAuthRedirect = (Component) => {
    let AuthRedirect = (props) => {
        if (!props.isAuth) { return <Redirect to={"/Login"} /> }
        return <Component {...props} />

    }
    let connectedwithAuthRedirect = connect(mapStateToProps)(AuthRedirect)
    return connectedwithAuthRedirect;
}


