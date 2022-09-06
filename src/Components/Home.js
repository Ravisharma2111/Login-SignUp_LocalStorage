import React from "react";

function Home({emaillog,passwordlog}) {
  return (
    <>
      <h1>Login Successfully</h1>
      <h2>Welcome {emaillog} {passwordlog}</h2>
    </>
  );
}

export default Home;
