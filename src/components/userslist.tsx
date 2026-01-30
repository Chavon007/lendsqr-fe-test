import type { User } from "../types/user";
import { fetchUsers } from "../services/userServices";
import { IoFilterOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
// import { IoMdArrowDropdown } from "react-icons/io";
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

interface FilterValues {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  status: string;
}

function Users() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [filterValues, setFilterValues] = useState<FilterValues>({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    status: "",
  });

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilterValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let filtered = users;

    // Apply filters
    if (filterValues.organization) {
      filtered = filtered.filter((user) =>
        user.organization.toLowerCase().includes(filterValues.organization.toLowerCase())
      );
    }

    if (filterValues.username) {
      filtered = filtered.filter((user) =>
        user.username.toLowerCase().includes(filterValues.username.toLowerCase())
      );
    }

    if (filterValues.email) {
      filtered = filtered.filter((user) =>
        user.email.toLowerCase().includes(filterValues.email.toLowerCase())
      );
    }

    if (filterValues.phoneNumber) {
      filtered = filtered.filter((user) =>
        user.phoneNumber.includes(filterValues.phoneNumber)
      );
    }

    if (filterValues.status) {
      filtered = filtered.filter((user) =>
        user.status.toLowerCase() === filterValues.status.toLowerCase()
      );
    }

    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to first page after filtering
    setShowFilterModal(false);
  };

  const handleResetFilter = () => {
    setFilterValues({
      organization: "",
      username: "",
      email: "",
      phoneNumber: "",
      status: "",
    });
    setFilteredUsers(users);
    setCurrentPage(1);
    setShowFilterModal(false);
  };

  if (loading) {
    return <p>Loading users...</p>;
  }

  // Pagination
  const totalUser = filteredUsers.length;
  const totalPages = Math.ceil(totalUser / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

  // Generate pagination numbers: 1, 2, 3, ..., last two pages
  const getPaginationNumbers = () => {
    const pages = [];
    
    if (totalPages <= 5) {
      // Show all pages if total is 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show 1, 2, 3, ..., second-to-last, last
      pages.push(1, 2, 3);
      if (totalPages > 4) {
        pages.push('...');
      }
      if (totalPages > 3) {
        pages.push(totalPages - 1);
      }
      pages.push(totalPages);
    }
    
    return pages;
  };

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
                <td
                  className={`user-table__cell user-table__status user-table__status--${user.status.toLowerCase()}`}
                >
                  {user.status}
                </td>
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
            onChange={(e) => {
              setUsersPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page when changing items per page
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <p className="user-table__pagination-text1">out of {totalUser}</p>
        </div>

        <div className="user-table__pagination-controls">
          <button
            className="user-table__pagination-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <GrFormPrevious className="pagination-btn-icon" />
          </button>
          
          {getPaginationNumbers().map((page, index) => 
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="user-table__pagination-ellipsis">
                ...
              </span>
            ) : (
              <p
                key={index}
                className={`user-table__pagination-btn-num ${
                  currentPage === page ? 'user-table__pagination-btn-num--active' : ''
                }`}
                onClick={() => setCurrentPage(page as number)}
              >
                {page}
              </p>
            )
          )}
          
          <button
            className="user-table__pagination-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <GrFormNext className="pagination-btn-icon" />
          </button>
        </div>
      </div>

      {/* Filter */}
      {showFilterModal && (
        <div
          className="user-table__filter-overlay"
          onClick={() => setShowFilterModal(false)}
        >
          <form
            className="user-table__filter"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleFilterSubmit}
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
                    value={filterValues[field.name as keyof FilterValues]}
                    onChange={handleFilterChange}
                  />
                )}

                {field.fieldType === "select" && (
                  <select
                    className="user-table__filter-select"
                    name={field.name}
                    value={filterValues[field.name as keyof FilterValues]}
                    onChange={handleFilterChange}
                  >
                    <option value="">Select</option>
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
                onClick={handleResetFilter}
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