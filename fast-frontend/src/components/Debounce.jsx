import axios from "axios";
import React, { useCallback, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Debounce = () => {
  let [value, setValue] = useState("");
  let [users, setUsers] = useState([]);

  const searchUsers = useDebounce(async (value) => {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(responce.data);
  }, 500);

  const changeHandler = useCallback(
    (e) => {
      setValue(e.target.value);
      searchUsers(e.target.value);
    },
    [searchUsers]
  );

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      <hr />
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Debounce;
