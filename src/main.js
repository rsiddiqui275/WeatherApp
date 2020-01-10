import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { requestApi } from './action';
import TableComponent from './Component/TableComponent'

class Home extends Component {
    constructor(props) {
        super(props);
        this.initValue = {
            CountryName: ""
        };
    }

    render() {
        const { weather, main } = this.props.results;
        return (
            <div>
                <Formik
                    initialValues={this.initValue}
                    onSubmit={(values) => { this.props.setCountry(values.CountryName) }}
                    render={({ dirty }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="CountryName">Country Name</label>
                                <Field name="CountryName" type="text" className={'form-control'} />
                                <ErrorMessage name="CountryName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <button type="submit" disabled={!dirty} className="btn btn-primary mr-2" >Enter</button>
                                <button type="reset" disabled={!dirty} className="btn btn-secondary">clear</button>
                            </div>
                        </Form>
                    )}
                />
                {main ? <TableComponent main={main} weather={weather} /> : ""}
            </div>)
    }
}

export default connect(state =>
    ({ results: state.data }),
    dispatch => ({
        setCountry: country => dispatch(requestApi(country))
    })
)(Home);