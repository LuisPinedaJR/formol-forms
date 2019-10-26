import React from "react"
import useform from "react-hook-form"

const HookForm = () => {
  const { register, handleSubmit } = useform()
  const onSubmit = values => console.log(values)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input name="firstName" ref={register} />

        <label>Last Name</label>
        <input name="lastName" ref={register} />

        <input type="submit" />
      </form>
    </div>
  )
}

export default HookForm
