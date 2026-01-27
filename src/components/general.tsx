import type { User } from "../types/user";
import { fetchUsers } from "../services/userServices";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Value } from "sass";

const personalInfoFields = [
  { label: "Full name", value: (u: User) => u.fullName },
  { label: "Phone number", value: (u: User) => u.phoneNumber },
  { label: "Email Address", value: (u: User) => u.email },
  { label: "BVN", value: (u: User) => u.bvn },
  { label: "Gender", value: (u: User) => u.gender },
  { label: "Marital status", value: (u: User) => u.personalInfo.maritalStatus },
  { label: "Children", value: (u: User) => u.personalInfo.children },
  {
    label: "Type of Residence",
    value: (u: User) => u.personalInfo.residenceType,
  },
];

const edu_employ = [
  {
    label: "Level and Education",
    value: (u: User) => u.educationEmployment.level,
  },
  {
    label: "Employment status",
    value: (u: User) => u.educationEmployment.employmentStatus,
  },

  {
    label: "Sector of employment",
    value: (u: User) => u.educationEmployment.sector,
  },

  {
    label: "Duration of employment",
    value: (u: User) => u.educationEmployment.duration,
  },

  {
    label: "office email",
    value: (u: User) => u.educationEmployment.officeEmail,
  },

  {
    label: "monthly income",
    value: (u: User) => u.educationEmployment.monthlyIncome,
  },

  {
    label: "loan repayment",
    value: (u: User) => u.educationEmployment.loanRepayment,
  },
];

const socials = [
  {
    label: "Twitter",
    value: (u: User) => u.socials.twitter,
  },
  {
    label: "Facebook",
    value: (u: User) => u.socials.facebook,
  },
  {
    label: "instagram",
    value: (u: User) => u.socials.instagram,
  },
];

const guarantor = [
  { label: "Full name", key: "fullName" },
  { label: "Phone number", key: "phoneNumber" },
  { label: "Email address", key: "email" },
  { label: "Relationship", key: "relationship" },
] as const;

function General() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      setLoading(true);

      try {
        const data = await fetchUsers();
        const allData = data.find((u) => u.id === id);
        setUserInfo(allData || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getUserInfo();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div>
        <h4>Personal Information</h4>

        <div>
          {userInfo &&
            personalInfoFields.map((p, index) => (
              <div key={index}>
                <h5>{p.label}</h5>
                <p>{p.value(userInfo)}</p>
              </div>
            ))}
        </div>
      </div>

      <div>
        <h4>Education and Emploumet</h4>

        <div>
          {userInfo &&
            edu_employ.map((ed, index) => (
              <div key={index}>
                <h5>{ed.label}</h5>
                <p>{ed.value(userInfo)}</p>
              </div>
            ))}
        </div>
      </div>

      <div>
        <h4>Socials</h4>

        <div>
          {userInfo &&
            socials.map((s, index) => (
              <div key={index}>
                <h5>{s.label}</h5>
                <p>{s.value(userInfo)}</p>
              </div>
            ))}
        </div>
      </div>

      <div>
        <h4>Guarantor</h4>

        {userInfo?.guarantors.map((g, index) => (
          <div key={index}>
            {guarantor.map((gs, idx) => (
              <div key={idx}>
                <h5>{gs.label}</h5>
                <p>{g[gs.key]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default General;
