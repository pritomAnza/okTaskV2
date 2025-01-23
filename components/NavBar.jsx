import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

const NavBar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <img className="w-32 ml-10 mt-4" src="/logo.png" alt="Logo" />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <span className="text-lg font-medium">
                Welcome, {session.user.name}
              </span>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <span className="text-lg font-medium">Welcome, Guest</span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
