import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { Button } from 'nysa-ui';
import FormTextField from '../FormTextField.component';

class Login extends Component {
  state = {
    loading: false,
  }

  handleSubmit = (e) => {
    const { ...props } = this.props;
    e.preventDefault(); // TODO: Why do we do this?
    this.setState({ loading: true });
    props.onSubmit(props.values);
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    const { ...props } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormTextField
          error={props.errors.username}
          name="username"
          placeholder="Username"
          handleBlur={props.handleBlur}
          handleChange={props.handleChange}
          touched={props.touched.username}
          value={props.values.username || ''}
        />
        <FormTextField
          error={props.errors.password}
          name="password"
          placeholder="Password"
          handleBlur={props.handleBlur}
          handleChange={props.handleChange}
          touched={props.touched.password}
          type="password"
          value={props.values.password || ''}
        />
        <div className="knc-form-buttons">
          <Button intent="primary" loading={this.state.loading} text="Sign In" type="submit" />
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  /* Functions */
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  /* Objects */
  errors: PropTypes.shape({}).isRequired,
  touched: PropTypes.shape({}).isRequired,
  values: PropTypes.shape({}).isRequired,
};

Login.defaultProps = {
};

const LoginForm = withFormik({
  validate: (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    }
    return errors;
  },
  displayName: 'LoginForm',
})(Login);

export default LoginForm;