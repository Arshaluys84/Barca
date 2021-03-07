import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormControl';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {

    let DialogEl = props.DialogsPage.Dialogs.map(d => <Dialog id={d.id} name={d.name} key={d.id} />);
    let MessageEl = props.DialogsPage.Messages.map(m => < Message message={m.message} key={m.id} />);
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogEl}
            </div>
            <div className={s.messages}>
                {MessageEl}
                <NewMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}
const maxLength20 = maxLengthCreator(20);
const NewMessageForm = React.memo((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder="your text" name="newMessageBody"
                    validate={[required, maxLength20]} />
            </div>
            <div>
                <button >Add Message</button>
            </div>
        </form>
    )
})

const NewMessageFormRedux = reduxForm({ form: 'dialogNewMessageForm' })(NewMessageForm)
export default Dialogs;

