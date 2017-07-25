import React, {Component} from 'react';
import {host} from "../../../global"
import axios from "axios";
import {connect} from "react-redux";
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


import {Field, reduxForm} from 'redux-form';
class ContestPointDataForm extends Component {
    render(){
     const {handleSubmit, pristine, reset, submitting, ranges, types} = this.props;
     const mappedRanges = ranges.map((range, i) => <option key={i} value={range.id}>{range.name}</option>);
     const mappedTypes = types.map((type, i) => <option key={i} value={type.id}>{type.name}</option>);
    return (

        <form onSubmit={handleSubmit}>

                <div className="card-block">
                    <div className="form-group row">
                        <label className="col-md-3 form-control-label" htmlFor="text-input">Points</label>
                        <div className="col-md-9">
                            <Field
                                name="points"
                                component="input"
                                type="text"
                                className="form-control"
                                placeholder="Points"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 form-control-label" htmlFor="text-input">Contest type</label>
                        <div className="col-md-9">
                            <Field name="countryId" className="form-control" component="select">
                                {mappedTypes}
                            </Field>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 form-control-label" htmlFor="text-input">Contest range</label>
                        <div className="col-md-9">
                            <Field name="countryId" className="form-control" component="select">
                                {mappedRanges}
                            </Field>
                        </div>
                    </div>
                    

                </div>
                   <button type="submit"  disabled={pristine || submitting} className="btn btn-primary pull-right">Save changes</button>
        </form>
    );
};
};

export default reduxForm({
    form: 'ContestPointDataForm', // a unique identifier for this form
})(ContestPointDataForm);
