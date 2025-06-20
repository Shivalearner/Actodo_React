import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup(props) {
  const navigate = useNavigate();
  const users = props.users;
  const setusers = props.setusers;
  const [newusers, setnewusers] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [registeruser, setregisteruser] = useState(true);

  function handleusername(evt) {
    setnewusers(evt.target.value);
  }
  function handleuserpassword(evt) {
    setnewpassword(evt.target.value);
  }
  function handleconfirmpassword(evt) {
    setconfirmpassword(evt.target.value);
  }
  function addusers() {
    if (!newusers.trim() || !newpassword || !confirmpassword) {
      alert("Please fill in all the fields");
      return;
    }
    if (newpassword !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    setusers([
      ...users,
      {
        username: newusers,
        password: newpassword,
      },
    ]);
    navigate("/");
    setregisteruser(false);
    setnewusers("");
    setnewpassword("");
    setconfirmpassword("");
  }
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-[#EFEFEF] w-96 p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>

        {/* Reserve fixed height for message */}
        <div className="h-10">
          {registeruser ? (
            <p className="mt-1">Join Us🚀</p>
          ) : (
            <p>Registered Successfully🎉</p>
          )}
        </div>

        <div className="flex flex-col gap-2 mt-3">
          <input
            type="text"
            className="w-full p-2 border rounded-md border-black bg-transparent"
            placeholder="Username"
            value={newusers}
            onChange={handleusername}
          />
          <input
            type="password"
            className="w-full p-2 border rounded-md border-black bg-transparent"
            placeholder="Password"
            value={newpassword}
            onChange={handleuserpassword}
          />
          <input
            type="password"
            className="w-full p-2 border rounded-md border-black bg-transparent"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={handleconfirmpassword}
          />
          <button
            onClick={addusers}
            className="bg-[#FCA201] p-2 text-black border rounded-md w-24 font-medium"
          >
            Sign up
          </button>
          <p>
            Already have an account?{" "}
            <Link to={"/"} className="font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
