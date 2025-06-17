import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const users = props.users;
  console.log(users)
  const navigate=useNavigate()
  const [newusername, setnewusername] = useState();
  function handleusername(evt) {
    setnewusername(evt.target.value);
  }
  const [userpassword, setuserpassword] = useState();
  function handleuserpassword(evt) {
    setuserpassword(evt.target.value);
  }
  function checkuser() {
    
    const matcheduser = users.find(function (item) {
      return item.username === newusername && item.password === userpassword;
    });
    
    if (matcheduser) {
        navigate("/landing",{state:{user:newusername}})
      console.log("Login Successfull");
    } else {
      console.log("Login Failed");
      setregistereduser(false);
    }
  }
  var [registereduser, setregistereduser] = useState(true);

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {registereduser ? (
          <p>
            I help you to manage your activities after your Sign in Completed🚀
          </p>
        ) : (
          <p className="text-red-500">Please Sign up before Login..</p>
        )}

        <div className="flex flex-col gap-2 mt-3">
          <input
            type="text"
            className="w-52 p-2 border rounded-md border-black bg-transparent "
            placeholder="Username"
            onChange={handleusername}
          />
          <input
            type="password"
            className="w-52 p-2 border rounded-md border-black bg-transparent "
            placeholder="Password"
            onChange={handleuserpassword}
          />

          <button
            onClick={checkuser}
            className="bg-[#8272DA] p-2 text-black border rounded-md w-24 font-medium"
          >
            Sign in
          </button>
          <p>
            Don't have an Account?{" "}
            <Link to={"/signup"} className="font-medium ">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
