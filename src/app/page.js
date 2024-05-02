import Sidebar from "@/components/sidebar/Sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <main className="flex">
      <div className="w-1/6 p-6 sidebar-wrap shadow-lg">
        <Sidebar/>
      </div>
      <div className="w-5/6">
        <h1 className="text-center text-2xl">Financial Calculator</h1>
      </div>
      </main> */}
      <div className="content-container pt-4">
        {/* <h1 className="text-center text-3xl">Financial Calculator</h1> */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-slate-200 rounded-md">
            <p className="text-center py-4">
              <Link href="/simple-interest">Simple Interest</Link>
            </p>
          </div>
          <div className="bg-slate-200 rounded-md">
            <p className="text-center py-4">
              <Link href="/compound-interest">Compound Interest</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
