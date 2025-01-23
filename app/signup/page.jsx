import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { auth, signIn, signOut } from "@/auth";

function SignUpPage() {
  return (
    <>
      <div className="flex w-full mt-24 gap-5 max-w-sm mx-auto overflow-hidden bg-white lg:max-w-6xl">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center  mx-auto">
            <img className="w-20" src="/todosmall.jpg" alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Welcome back!
          </p>
          <form 
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/todo" });
            }}
          >
            <button
              type="submit"
              className="flex items-center  justify-around mt-4  w-full text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50"
            >
              <div className="py-2">
                <FaGithub className="text-3xl text-cyan-900" />
              </div>
              <span className="w-5/6  py-3 font-bold text-center">
                Sign in with GitHub
              </span>
            </button>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-600 lg:w-1/4"></span>
            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase hover:underline"
            >
              or login with email
            </a>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg border-gray-600 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="loggingPassword"
              >
                Password
              </label>
              <a href="#" className="text-xs text-gray-500 hover:underline">
                Forget Password?
              </a>
            </div>
            <input
              id="loggingPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </div>

        {/* Video Background */}
        <div className="relative hidden lg:block lg:w-1/2">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/vid.mp4"
            autoPlay
            muted
          ></video>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
