import type { User } from "../types/user";

type GeneralProps = {
  user: User;
};

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

const eduEmploy = [
  { label: "Level of Education", value: (u: User) => u.educationEmployment.level },
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
    label: "Office email",
    value: (u: User) => u.educationEmployment.officeEmail,
  },
  {
    label: "Monthly income",
    value: (u: User) => u.educationEmployment.monthlyIncome,
  },
  {
    label: "Loan repayment",
    value: (u: User) => u.educationEmployment.loanRepayment,
  },
];

const socials = [
  { label: "Twitter", value: (u: User) => u.socials.twitter },
  { label: "Facebook", value: (u: User) => u.socials.facebook },
  { label: "Instagram", value: (u: User) => u.socials.instagram },
];

function General({ user }: GeneralProps) {
  return (
    <div className="general">
      <h4 className="general__section-title">Personal Information</h4>
      <div className="general__section">
        {personalInfoFields.map((p) => (
          <div key={p.label} className="general__field">
            <h5 className="general__label">{p.label}</h5>
            <p className="general__value">{p.value(user)}</p>
          </div>
        ))}
      </div>

      <h4 className="general__section-title">Education and Employment</h4>
      <div className="general__section">
        {eduEmploy.map((e) => (
          <div key={e.label} className="general__field">
            <h5 className="general__label">{e.label}</h5>
            <p className="general__value">{e.value(user)}</p>
          </div>
        ))}
      </div>

      <h4 className="general__section-title">Socials</h4>
      <div className="general__section">
        {socials.map((s) => (
          <div key={s.label} className="general__field">
            <h5 className="general__label">{s.label}</h5>
            <p className="general__value">{s.value(user)}</p>
          </div>
        ))}
      </div>

      <h4 className="general__section-title">Guarantors</h4>
      <div className="general__guarantors">
        {user.guarantors.map((g, index) => (
          <div key={index} className="general__guarantor">
            <p className="general__guarantor-name">{g.fullName}</p>
            <p className="general__guarantor-phone">{g.phoneNumber}</p>
            <p className="general__guarantor-email">{g.email}</p>
            <p className="general__guarantor-relationship">{g.relationship}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default General;