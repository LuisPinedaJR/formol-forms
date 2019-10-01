import React from "react"
import Formol, { Field } from "formol"
import "formol/lib/default.css"
import Alert from "react-s-alert"
import "react-s-alert/dist/s-alert-default.css"
import "react-s-alert/dist/s-alert-css-effects/flip.css"
import { firestore } from "../../firebase"

const handleSubmit = async values => {
  const { firstname, lastname, address, city, zip } = values
  const snapshot = firestore.collection("users").get()
  Alert.success(`Thank you ${firstname} for RSVP-ing, you're the best!`, {
    position: "top-right",
    effect: "flip",
    timeout: 5000,
  })
  console.log(firstname, lastname, address, city, zip)
  console.log({ snapshot })
}

const SignUpForm = () => (
  <Formol onSubmit={handleSubmit}>
    <Field name="firstname" required>
      First Name
    </Field>
    <Field name="lastname" required>
      Last Name
    </Field>
    {/* <Field type="email" required>
      E-mail
    </Field> */}
    <Field name="address" required>
      Street Address
    </Field>
    <Field name="city" required>
      City
    </Field>
    <Field
      name="zip"
      pattern="^[0-9]{5}$"
      validityErrors={({ patternMismatch }) =>
        patternMismatch &&
        "Zip must be a five-digit number if not in USA enter 00000"
      }
      required
    >
      Zip Code
    </Field>

    {/* <Field type="area" required>
      How can we help your business grow?
    </Field> */}
    <Alert stack={{ limit: 2 }} />
  </Formol>
)

export default SignUpForm
