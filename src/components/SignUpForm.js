import React from "react";
import Formol, { Field } from "formol";
import "formol/lib/default.css";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';


const handleSubmit = async values => {
  Alert.success('Inquiry submitted, will respond within 24hr', {
    position: 'top-right',
    effect: 'flip',
    timeout: 5000
  })
  console.log(values)
}

const SignUpForm = () => (
  <Formol onSubmit={handleSubmit} >
    <Field name="name" required>Name</Field>
    <Field type="email" required>
      E-mail
      </Field>
    <Field
      name="zip"
      pattern="^[0-9]{5}$"
      validityErrors={({ patternMismatch }) =>
        patternMismatch && "Zip must be a five-digit number if not in USA enter 00000"
      }
    >
      Zip Code
      </Field>
    <Field type="area" required>How can we help your business grow?</Field>
    <Alert stack={{ limit: 2 }} />
  </Formol>

)

export default SignUpForm;