import { auth } from "@/auth";
import Link from 'next/link';
const page = async () =>  {
  const session = await auth();
  const href = session && session?.user ? "/todo" : "/signup";
  return (
    <>
   <div className="screen">
   <div className="container  m-auto">
    <div className=" justify-around items-center  px-24 flex">
      <div >
      <p className="text-6xl font-bold text-center">Organize your <br /> work and <br /> life, finally. </p>
      <p className="text-xl mt-6 text-center text-slate-600">Simplify Your Life With World's <br /> Best ToDo App</p>
      <Link href={href}>
      <button className="text-center button-53 mt-6">Start for Free</button>
    </Link>
      </div>
      <img className="w-2/4" src="/landingImg.jpg" alt="" />
    </div>
      <img src="/wave.jpg" className="" alt="" />
    </div>
   </div>
    </>
  )
}

export default page