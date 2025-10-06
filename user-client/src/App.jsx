import { NavLink } from "react-router-dom";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  const handleUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const gender = form.gender.value;

    const user = {
      name,
      email,
      age,
      gender,
    };
    console.log(user);

    fetch("http://localhost:2000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "User Added!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <>
      <div className="text-3xl font-extrabold text-center m-8">
        User Management System
      </div>

      <div className="">
        <NavLink to='/'>view Users</NavLink>
      </div>

      <div className=" p-16  border-red-600">
        <form onSubmit={handleUser} className="border-2 border-purple-700 p-8 ">
          <div className=" md:flex gap-4">
            <div className="form-control md: w-1/2 ">
              <label className="label ">
                <span className="label-text font-bold">Your Name</span>
              </label>
              <label className="input-group ">
                <input
                  name="name"
                  type="text"
                  placeholder="Enter you name"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            <div className="form-control  md: w-1/2">
              <label className="label">
                <span className="label-text font-bold">Your Email</span>
              </label>
              <label className="input-group">
                <input
                  name="email"
                  type="text"
                  placeholder="Enter you email"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control  md: w-1/2">
              <label className="label">
                <span className="label-text font-bold">Your age</span>
              </label>
              <label className="input-group">
                <input
                  name="age"
                  type="text"
                  placeholder="Enter you age"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            <div className="form-control  md: w-1/2">
              <label className="label">
                <span className="label-text font-bold">Your gender</span>
              </label>
              <label className="input-group">
                <input
                  name="gender"
                  type="text"
                  placeholder="Enter you name"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-4 ">
            Add User
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
