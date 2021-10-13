import "./formStyle.css";
import { useState } from "react";

import { setInput } from '../../helpers/inputHelpers'

const Form = () => {
const [ name, setName ] = useState("");
const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");
const [country, setCountry ] = useState("");

console.log({name, email, password, country});

//name
  // const handleNameField = e => setName(e.target.value);

//email
// const handleEmailField = e => setEmail(e.target.value);

// password
// const handlePasswordField = e => setPassword(e.target.value);

// country
// const handleCountryField = e => setCountry(e.target.value);


// submit

const handleSubmit = (e) => {
  e.preventDefault();
  alert(`
  username: ${name}
  email: ${email}
  password: ${password}
  country: ${country}
  `)
  setName("");
  setEmail("");
  setPassword("");
  setCountry("");
}

  return (
    <div style={{ height: "110vh" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <p>{name}</p>
          <label>
            <strong>Username:</strong>{" "}
          </label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={setInput(setName)}
          />
        </div>
        <div>
          <p>{email}</p>
          <label>
            <strong>E-mail:</strong>{" "}
          </label>
          <br />
          <input
            type="email"
            placeholder="email"
            onChange={setInput(setEmail)}
            value={email}
          />
        </div>
        <div>
          <p>{password}</p>
          <label>
            <strong>Password: </strong>
          </label>
          <br />
          <input
            type="password"
            placeholder="pass"
            onChange={setInput(setPassword)}
            value={password}
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <p>{country}</p>
          <label>
            <strong>Country: </strong>
          </label>
          <select
            value={country}
            onChange={setInput(setCountry)}
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <button className="btn__click" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;