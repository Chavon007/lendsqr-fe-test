import type { User } from "../types/user";
import { fetchUsers } from "../services/userServices";
import { IoFilterOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "../styles/userTable.scss";
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

function Users() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const usersPerPage = 10;

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
    return <p>Loading users...</p>;
  }

  // pagination

  const totalUser = users.length;
  const totalPages = Math.ceil(totalUser / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = users.slice(startIndex, startIndex + usersPerPage);
  return (
    <div className="user-table">
      <div className="user-table__container">
        <table className="user-table__table">
          <thead className="user-table__thead">
            <tr className="user-table__row">
              {headers.map((head) => (
                <th key={head} className="user-table__header">
                  <span className="user-table__header-text">{head}</span>
                  <button
                    className="user-table__filter-btn"
                    onClick={() => setShowFilterModal(true)}
                  >
                    <IoFilterOutline />
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="user-table__tbody">
            {currentUsers.map((user) => (
              <tr
                key={user.id}
                className="user-table__row"
                onClick={() => navigate(`/user/${user.id}`)}
              >
                <td className="user-table__cell">{user.organization}</td>
                <td className="user-table__cell">{user.username}</td>
                <td className="user-table__cell">{user.email}</td>
                <td className="user-table__cell">{user.phoneNumber}</td>
                <td className="user-table__cell">{user.dateJoined}</td>
                <td className="user-table__cell">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="user-table__pagination">
        <div className="user-table__pagination-info">
          <p className="user-table__pagination-text">Showing</p>
          <select
            className="user-table__pagination-select"
            value={usersPerPage}
            disabled
          >
            <option className="pagination-option" value={20}>
              20{" "}
            </option>
            <span className="user-table__pagination-icon">
              <IoMdArrowDropdown />
            </span>
          </select>
          <p className="user-table__pagination-text1">Out of {totalUser}</p>
        </div>

        <div className="user-table__pagination-controls">
          <button
            className="user-table__pagination-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <GrFormPrevious className="pagination-btn-icon" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(0, 10)
            .map((page, index) => (
              <p
                key={index}
                className="user-table__pagination-btn-num"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </p>
            ))}
          <button
            className="user-table__pagination-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <GrFormNext className="pagination-btn-icon" />
          </button>
        </div>
      </div>

      {/* filter */}

      {showFilterModal && (
        <div
          className="user-table__filter-overlay"
          onClick={() => setShowFilterModal(false)}
        >
          <form
            className="user-table__filter"
            onClick={(e) => e.stopPropagation()}
          >
            {filterFields.map((field) => (
              <div key={field.name} className="user-table__filter-field">
                <label className="user-table__filter-label">
                  {field.label}
                </label>

                {field.fieldType === "input" && (
                  <input
                    className="user-table__filter-input"
                    type={field.inputType}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
                )}

                {field.fieldType === "select" && (
                  <select
                    className="user-table__filter-select"
                    name={field.name}
                  >
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

            <div className="user-table__filter-actions">
              <button
                type="button"
                className="user-table__filter-reset"
                onClick={() => setShowFilterModal(false)}
              >
                Reset
              </button>
              <button type="submit" className="user-table__filter-submit">
                Filter
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
export default Users;
