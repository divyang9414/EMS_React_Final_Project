import { getDatabase, onValue, ref, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import app from "../firebase/firebase";
import img from "../assets/images/user.png";

export default function EmployeeView() {
  const params = useParams();
  const id = params.id;
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  // console.log(input);

  const dataBase = getDatabase(app);

  useEffect(() => {
    const dbRef = ref(dataBase, `Employee/${id}`);
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setInput(data);
      console.log(data);
    });
  }, []);

  // useEffect(() => {
  //   const dbRef = ref(dataBase, "Employee/");
  //   const cleanUp = onValue(dbRef, (snapshot) => {
  //     const data = snapshot.val();
  //     if (data) {
  //       const temp = Object.keys(data).map((key, idx) => ({
  //         id: key,
  //         ...data[key],
  //       }));
  //       setUsers(temp);
  //     }
  //   });
  //   return () => cleanUp();
  // }, []);

  const handleEdit = (id) => {
    navigate(`/AdminDeshbord/EmployeeEdit/${id}`);
  };

  const handleBack = () => {
    navigate("/AdminDeshbord/EmployeeList");
  };

  return (
    <div>
      <div className="bg-[#009487] h-32 pt-9">
        <h1 className="text-center text-4xl font-semibold text-black"> Employee Detail</h1>
      </div>
        <div className="w-full border p-5">
          <table className="border-separate border-spacing-2 border border-slate-400 w-full shadow-2xl">
            <tbody>
              <tr>
                <th className="text-start ps-3 border p-3">EmpID</th>
                <td className="border ps-3 py-2">{input.EmployeeId}</td>
                <th className="text-start ps-3 border">Photo</th>
                <td className="border ps-3 py-2">
                  <img src={img} width="100px" alt="" />
                </td>
              </tr>
              <tr>
                <th className="text-start ps-3 border">First Name</th>
                <td className="border ps-3 py-2">{input.first_name}</td>
                <th className="text-start ps-3 border">Last Name</th>
                <td className="border ps-3 py-2">{input.last_name}</td>
              </tr>
              <tr>
                <th className="text-start ps-3 border">Department</th>
                <td className="border ps-3 py-2">{input.departments}</td>
                <th className="text-start ps-3 border">Email</th>
                <td className="border ps-3 py-2">{input.email}</td>
              </tr>
              <tr>
                <th className="text-start ps-3 border">DOB</th>
                <td className="border ps-3 py-2">{input.dob}</td>
                <th className="text-start ps-3 border">Date Of Joining</th>
                <td className="border ps-3 py-2">{input.doj}</td>
              </tr>
              <tr>
                <th className="text-start ps-3 border">Address</th>
                <td className="border ps-3 py-2">{input.address}</td>
                <th className="text-start ps-3 border">City</th>
                <td className="border ps-3 py-2">{input.city}</td>
              </tr>
              <tr>
                <th className="text-start ps-3 border">State</th>
                <td className="border ps-3 py-2">{input.state}</td>
                <th className="text-start ps-3 border">Country</th>
                <td className="border ps-3 py-2">{input.country}</td>
              </tr>
              <tr>
                <th className="text-start ps-3 border">Mobile</th>
                <td className="border ps-3 py-2">{input.mobile_number}</td>
                <td colSpan="2">
                  <div className="flex">
                    <Link to={`/AdminDeshbord/EmployeeEdit/${id}`} onClick={() => handleEdit()} className="text-center bg-[#22873a] text-white hover:bg-[#18712b] rounded w-full me-2 p-2">Edit Detail</Link>
                    <Link to={`/AdminDeshbord/SalaryView/${id}`} className="text-center bg-[#cc9c02] text-white hover:bg-[#e1ac02] rounded w-full mx-2 p-2">Salary History</Link>
                    <Link to="" className="text-center bg-[#b12a35] text-white hover:bg-[#c42232] rounded w-full ms-2 p-2">Leave History</Link>
                    <button onClick={() => handleBack()} className="bg-[#2e2ab1] text-white hover:bg-[#4022c4] rounded w-full ms-2 p-2">
                      Back
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}
