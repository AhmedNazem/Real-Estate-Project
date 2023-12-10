import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl  text-center font-semibold  text-green-900 my-7">
        Sign Up
      </h1>
      <form className="flex flex-col  gap-4">
        <input
          type="text"
          placeholder="UserName"
          id="username"
          className="placeholder:text-gray-320  border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="  placeholder:text-gray-320  border p-3 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          id="passoword"
          className=" placeholder:text-gray-320  border p-3 rounded-lg"
        />
        <button className="p-3 bg-green-400  rounded-xl text-green-100 uppercase  hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5 ">
        <p>Have an account?</p>
        <Link to={"/signin"}>
          <span className="text-green-800">Sign In </span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
