import { Link } from "react-router-dom";
import { useState } from "react";


const General = () => <div>General page</div>;
const Documents = () => <div>Document page</div>;
const Bank = () => <div>Bank Page</div>;
function UserDetails() {
  const [activeTab, setActiveTab] = useState("General Details");

  return (
    <div>
      <div>
        {/* back home */}
        <div>
          <Link to="/">Back to users</Link>
        </div>
        {/* listing */}

        <div>
          <div>
            <h3>User Details</h3>
          </div>

          <div>
            <button>Blacklist User</button>
            <button>Activate User</button>
          </div>
        </div>

        {/* user details */}

        <div>
          {/* bio */}
          <div>
            {/* name */}
            <div>
              <img src="" alt="" />
              <h3>
                <span>{}</span>
                <span>{}</span>
              </h3>
            </div>
            {/* user tie */}
            <div>
              <p>User’s Tier</p>
              <img src="" alt="" />
            </div>
            {/* amount */}
            <div>
              <p></p>
              <small></small>
            </div>
          </div>
          {/* Tab */}
          <div>
            <p onClick={() => setActiveTab("general")}>General Details</p>
            <p onClick={() => setActiveTab("documents")}>Documents</p>
            <p onClick={() => setActiveTab("bank")}>Bank</p>
          </div>
        </div>
      </div>

      <div>
        {activeTab === "general" && <General />}
        {activeTab === "bank" && <Bank />}
        {activeTab === "documents" && <Documents />}
      </div>
    </div>
  );
}
export default UserDetails;
