import React from "react";

const Table = (props) => {
  return (
    <div>
      <h2>Employee List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Track</th>
            <th scope="col">Courses</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td onClick={() => alert(employee.name)}>{employee.name}</td>
              <td>${employee.salary}</td>
              <td>{employee.track}</td>
              <td>
                {employee.courseList !== ""
                  ? employee.courseList.join(", ")
                  : ""}
              </td>
              <td>
                <button onClick={()=>props.openEdit(employee, index)}>
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    props.hndelDelete(index)
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
