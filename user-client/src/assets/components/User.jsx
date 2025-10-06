import { useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { HiPencil } from "react-icons/hi2";

function User() {
  const loadedUsers = useLoaderData();
  const { name, email, age, gender } = loadedUsers;
  return (
    <div>
      <h1 className="text-2xl text-center underline font-bold text-lime-500 mt-4">Total users : {loadedUsers.length}</h1>
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
            {loadedUsers.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td className="">
                  <button className="mr-4 btn text-xl">
                   <MdDeleteForever />
                  </button>
                  <button className="text-xl btn"><HiPencil /></button>
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
