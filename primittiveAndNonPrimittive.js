import React, { useState } from "react";

function primittiveAndNonPrimittive() {
  const [price, setPrice] = useState(0);
  const [user, setUser] = useState({
    name: "john",
    age: 25,
  });
  function updateState() {
    setPrice(0); // here we cant se any change or this statement wont update the price state
    // therefore it wont cause rerender of the component
  }

  function updateUser() {
    setUser({
      name: "John",
      age: 25,
    });
  } // here it will update the user state even if both the content are the same
  // this is because in js primitive values(Number, String, boolean) they are passed by value
  // and reference values(Object, Array) they are passed by reference

  return (
    <div>
      <button onClick={updatePrice}>Click</button>
      <button onClick={updateUser}>Click</button>
    </div>
  );
}

export default primittiveAndNonPrimittive;
