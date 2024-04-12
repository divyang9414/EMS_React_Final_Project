import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminRegister from "./pages/AdminRegister.jsx";
import AdminList from "./pages/AdminList.jsx";
import AdminEdit from "./pages/AdminEdit.jsx";
import AdminDeshbord from "./pages/AdminDeshbord.jsx";
import EmployeeDeshbord from "./pages/EmployeeDeshbord.jsx";
import LeaveApplication from "./pages/LeaveApplication.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminRegister" element={<AdminRegister />} />
        <Route path="/AdminList" element={<AdminList />} />
        <Route path="/AdminEdit/:id" element={<AdminEdit />} />

        <Route path="/AdminDeshbord//*" element={<AdminDeshbord />}>
          <Route path="DepartmentTable" />  
          <Route path="DepartmentTypeAdd" />
          <Route path="DepartmentTypeEdit/:id" />

          <Route path="LeaveTable" />
          <Route path="LeaveTypeAdd" />
          <Route path="LeaveTypeEdit/:id" />


          <Route path="EmployeeRegister" />
          <Route path="EmployeeList" />
          <Route path="EmployeeEdit/:id" />
          <Route path="EmployeeView/:id" />

          <Route path="SalaryTable" />
          <Route path="SalaryAdd" />
          <Route path="SalaryEdit/:id" />
          <Route path="SalaryView/:id" />
        </Route>

        <Route path="/EmployeeDeshbord" element={<EmployeeDeshbord />} />
        <Route path="/LeaveApplication" element={<LeaveApplication />} />
      </Routes>
    </Router>
  );
}

export default App;
