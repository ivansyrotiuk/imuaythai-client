import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import SubmitButton from '../../Buttons/SubmitButton';
import { Field, reduxForm } from 'redux-form';

let RoundForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="card-block">
                <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">
                        Name
                    </label>
                    <div className="col-md-9">
                        <Field name="name" component="input" type="text" className="form-control" placeholder="Name" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">
                        Round duration
                    </label>
                    <div className="col-md-9">
                        <Field name="duration" component="input" type="number" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">
                        Rounds count
                    </label>
                    <div className="col-md-9">
                        <Field name="roundsCount" component="input" type="number" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">
                        Break duration
                    </label>
                    <div className="col-md-9">
                        <Field name="breakDuration" component="input" type="number" className="form-control" />
                    </div>
                </div>
            </div>
            <SubmitButton disabled={pristine} submitting={submitting} className="pull-right">
                Save changes
            </SubmitButton>
        </form>
    );
};

export default reduxForm({
    form: 'RoundForm'
})(RoundForm);
