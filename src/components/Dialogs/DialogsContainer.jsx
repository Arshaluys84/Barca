
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect, } from '../../hoc/withAthRedirect';
import { addMessageCreater } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageCreater(newMessageBody))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

