import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

        await createUserDocumentFromAuth(user, {displayName});

    } catch (error) {
 
        console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with your Email and Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Display Name</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label htmlFor="">Email</label>
        <input
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label htmlFor="">Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label htmlFor="">Confirm Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit"> Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
