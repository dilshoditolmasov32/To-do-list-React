import React, { useState } from "react";
import "./Forma.css";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Forma = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!value.trim()) return;
    toast("Iltimos maydonni to'ldiring!");

    let user = {
      value,
    };
    setData([...data, user]);
    setValue("");
  };

  let toDolistData = data?.map((val, i) => (
    <div className="inputText">
      <p className="input-text" key={i}>
        {val.value}
      </p>
      <div className="delete">
        <MdDelete />
      </div>
    </div>
  ));
  return (
    <form className="forma" onSubmit={handleSubmit}>
      <div className="formaContent">
        <input
          value={value}
          type="text"
          className="inputName"
          onChange={(e) => setValue(e.target.value)}
          placeholder="What is the today"
          required
        />

        <button className="btnSubmit" type="submit">
          Add
        </button>
      </div>

      <div className="contentText">{toDolistData}</div>
    </form>
  );
};

export default Forma;
