import { useState, useEffect } from "react";
import type { loginDetails } from "../../types/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/Union.png";
import leadsqr from "../../assets/lendsqr.png";
import sigin from "../../assets/sigin.png";
import "../../styles/login.scss";

function Login() {
  const [formdata, setFormdata] = useState<loginDetails>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Redirect to users page if already logged in
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      navigate("/users");
    }
  }, [navigate]);

const handleSumbit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  if (!formdata.email || !formdata.password) {
    setError("Please fill all required fields");
    return;
  }

  setLoading(true); 

  try {
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setSuccess("Login successful");
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", formdata.email);

    setTimeout(() => {
      navigate("/users");
    }, 1000);
  } catch (err) {
    setError("Can't login now");
    throw err;
  } finally {
    setLoading(false); 
  }
};

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login">
      <div className="logo_text">
        <div className="logo">
          <img src={logo} alt="logo" className="lendsqr_logo" />
          <img src={leadsqr} alt="lendsqr" className="lendsqr__brand" />
        </div>

        <div className="image">
          <img src={sigin} alt="login illustration" className="mainimage" />
        </div>
      </div>

      {/* login form */}
      <div className="login_form-container">
        <div className="login_form1">
          <h2 className="login__title">Welcome</h2>
          <p className="login__subtitle">Enter details to login.</p>

          <form onSubmit={handleSumbit} className="login__form">
            <input
              className="login__input"
              type="email"
              value={formdata.email}
              placeholder="Email"
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
            />

            <div className="input">
              <input
                type={showPassword ? "text" : "password"}
                className="login__input1"
                value={formdata.password}
                placeholder="Password"
                onChange={(e) =>
                  setFormdata({ ...formdata, password: e.target.value })
                }
              />
              <p className="login__show" onClick={togglePasswordVisibility}>
                {showPassword ? "HIDE" : "SHOW"}
              </p>
            </div>

            <Link className="login__forgot" to="/forgot-password">
              Forgot PASSWORD?
            </Link>

            <button type="submit" className="login__button" disabled={loading}>
              {loading ? "Logging in..." : "LOG IN"}
            </button>

            {error && <p className="login__error">{error}</p>}
            {success && <p className="login__success">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
