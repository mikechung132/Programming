import React from "react";

function FormComponent(props){
  return (
      <main>
          <form>
              <input
                  value={props.data.firstName}
                  name="firstName"
                  placeholder="First Name"
                  onChange={props.handleChange}
                  /><br />
              <input
                  value={props.data.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  onChange={props.handleChange}
                  /><br />
              <input
                  type="text"
                  value={props.data.age}
                  name="age"
                  placeholder="Age"
                  onChange={props.handleChange}
                  /><br />

              <input
                  type="radio"
                  value={props.data.gender}
                  name="gender"
                  value="Male"
                  checked={props.data.gender === "Male"}
                  onChange={props.handleChange}
                  /> Male <br />

              <input
                  type="radio"
                  value={props.data.gender}
                  name="gender"
                  value="Female"
                  checked={props.data.gender === "Female"}
                  onChange={props.handleChange}
                  /> Female <br />

              <label>Destination: </label>
                  <select
                      value={props.data.destination}
                      onChange={props.handleChange}
                      name="destination"
                  >
                      <option value="">-- Please Select One --</option>
                      <option value="Chicago">Chicago</option>
                      <option value="Miami">Miami</option>
                      <option value="Los Angeles">Los Angeles</option>
                  </select>
              <br />

              <article>Dietary Restrictions: </article>
              <label>
                  <input
                      type="checkbox"
                      name="isVegan"
                      checked={props.data.isVegan}
                      onChange={props.handleChange}
                  />Vegan
              </label>
              <br />

              <label>
                  <input
                      type="checkbox"
                      name="isVegetarian"
                      checked={props.data.isVegetarian}
                      onChange={props.handleChange}
                  />Vegetarian
              </label>
              <br />

              <label>
                  <input
                      type="checkbox"
                      name="isKosher"
                      checked={props.data.isKosher}
                      onChange={props.handleChange}
                  />Kosher
              </label>
              <br />

              <button>Submit</button>
          </form>

          <hr />
          <h2>Entered Information:</h2>
          <p>Your name: {props.data.firstName} {props.data.lastName}</p>
          <p>Your age: {props.data.age}</p>
          <p>Your gender: {props.data.gender}</p>
          <p>Your destination: {props.data.destination}</p>
          <p>Your dietary restrictions:   </p>
          <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
          <p>Vegetarian: {props.data.isVegetarian ? "Yes" : "No"}</p>
          <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
      </main>
  )
}

export default FormComponent;
