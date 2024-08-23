// some time we have an object in our state
import React, { useState } from "react";

function IncorrectUpdation() {
  const [user, setUser] = useState({ name: "", age: 50, city: "" });

  function handleChange(e) {
    setUser((user.name = e.target.value)); // but this statement wont work as expected
    // it will replace all the object properties with name field
    //  so the correct way to use is 
    setUser({...user, name: e.target.value});
    // this is the correct way first it will copy all the fields from user object
    // then name field will be overwritten
    // there also have another common practice which is more complex
    setUser(prev => ({
        ...user, 
        name: e.target.value
    }))
  }

  return (
    <div>
      <input type="text" placeholder="your name" onChange={handleChange} />
      {/* so whenever the user enters his/her name we need to update our name field in the 
      state variable user
      most of the people will do a mistake here */}
    </div>
  );
}

export default IncorrectUpdation;
