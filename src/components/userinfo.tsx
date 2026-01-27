import type { User } from "../types/user";
import { fetchUsers } from "../services/userServices";
import { IoFilterOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const headers = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];

const filterFields = [
  {
    label: "Organization",
    name: "organization",
    fieldType: "select",
    options: ["Lendsqr", "Irorun", "Lendstar"],
  },
  {
    label: "Username",
    name: "username",
    fieldType: "input",
    inputType: "text",
    placeholder: "User",
  },
  {
    label: "Email",
    name: "email",
    fieldType: "input",
    inputType: "email",
    placeholder: "Email",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    fieldType: "input",
    inputType: "number",
    placeholder: "Phone Number",
  },
  {
    label: "Status",
    name: "status",
    fieldType: "select",
    options: ["Active", "Inactive", "Pending", "Blacklisted"],
  },
];

function UserTable() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const usersPerPage = 50;

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  if (loading) {
    return <p className="loading">Loading users...</p>;
  }

  // pagination

  const totalUser = users.length;
  const totalPages = Math.ceil(totalUser / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = users.slice(startIndex, startIndex + usersPerPage);
  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead className="table-head">
          <tr className="table-row">
            {headers.map((head) => (
              <th key={head} className="table-header">
                <span className="header-text">{head}</span>
                <button className="filter-button" onClick={() => setShowFilterModal(true)}>
                  <IoFilterOutline />
                </button>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="table-body">
          {currentUsers.map((user) => (
            <tr key={user.id} className="table-row">
              <td className="table-cell">{user.organization}</td>
              <td className="table-cell">{user.username}</td>
              <td className="table-cell">{user.email}</td>
              <td className="table-cell">{user.phoneNumber}</td>
              <td className="table-cell">{user.dateJoined}</td>
              <td className="table-cell">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-container">
        <div className="pagination-info">
          <p className="pagination-text">Showing</p>
          <select className="pagination-select" value={usersPerPage} disabled>
            <option>50</option>
          </select>
          <p className="pagination-text">out of {totalUser}</p>
        </div>

        <div className="pagination-controls">
          <button
            className="pagination-button prev-button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <GrFormPrevious />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(0, 10)
            .map((page, index) => (
              <button key={index} className="pagination-button page-number" onClick={() => setCurrentPage(page)}>
                {page}
              </button>
            ))}
          <button
            className="pagination-button next-button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <GrFormNext />
          </button>
        </div>
      </div>

      {/* filter */}

      {showFilterModal && (
        <form className="filter-modal">
          {filterFields.map((field) => (
            <div key={field.name} className="filter-field">
              <label className="filter-label">{field.label}</label>

              {field.fieldType === "input" && (
                <input
                  className="filter-input"
                  type={field.inputType}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              )}

              {field.fieldType === "select" && (
                <select className="filter-select" name={field.name}>
                  <option value=""> Select</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}

          <div className="filter-actions">
            <button className="reset-button">Reset</button>
            <button className="filter-submit-button">Filter</button>
          </div>
        </form>
      )}
    </div>
  );
}
export default UserTable;