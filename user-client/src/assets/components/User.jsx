import { Link, NavLink, useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { HiPencil } from "react-icons/hi2";
import Swal from "sweetalert2";
import { useState } from "react";

function User() {
  const loadedUsers = useLoaderData();
  const [users, setUser] = useState(loadedUsers);
  const { name, email, age, gender } = users;

  const handleDelete = (id) => {
    fetch(`http://localhost:2000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              //Remove the user grom UI
              const remainingUsers = users.filter((user) => user._id !== id);
              setUser(remainingUsers);

              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });

    console.log(id);
  };
  return (
    <div>
      <h1 className="text-2xl text-center underline font-bold text-lime-500 mt-4">
        Total users : {loadedUsers.length}
      </h1>
      <div className="">
        <NavLink to="/">add Users</NavLink>
      </div>
      <div className="overflow-x-auto p-16">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr className="text-2xl font-mono">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td className="">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="mr-4 btn text-xl"
                  >
                    <MdDeleteForever />
                  </button>
            
                    <Link to={`/users/update/${user._id}`}>
                      <button className="text-xl btn">
                        <HiPencil />
                      </button>
                    </Link>
              
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
