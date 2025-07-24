import React, { useRef, useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (data) => {
    setUsers((prev) => [...prev, data]);
  }

  const handleRemove = (id) => {
    setUsers(prev => prev.filter((item, index) => index !== id));
  }

  return (
    <div className="w-full h-screen bg-zinc-300 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards users={users} handleRemove={handleRemove} />
        <Form handleFormSubmit={handleFormSubmit} />
      </div>

    </div>
  )
}
export default App;