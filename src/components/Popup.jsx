import React from "react";
import "./popup.css";

const Popup = ({ 
  handeChage,
  handelSubmet,
  handeTextarea,
  edit,
  editData,
  handelClose,
}) => {
  return (
    <div className="popup">
      <form onSubmit={handelSubmet} className="form">
        <input
          required={true}
          defaultValue={edit ? editData.name : ""}
          onChange={handeChage}
          type="text"
          className="name"
          placeholder="name"
        />
        <input
          required={true}
          onChange={handeChage}
          type="number"
          className="salary"
          placeholder="salary"
          defaultValue={edit ? editData.salary : ""}
        />
        <input
          required={true}
          onChange={handeChage}
          type="text"
          className="track"
          placeholder="track"
          defaultValue={edit ? editData.track : ""}
        />
        <textarea
          className="courses"
          placeholder="add , between courses "
          onChange={handeTextarea}
          required={true}
          defaultValue={edit ? editData.courseList.join(", ") : ""}
        ></textarea>
        <div className="buttons">
          <input type="submit" className="submit" />
          <button className="closebtn" onClick={handelClose}>
            close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Popup;
