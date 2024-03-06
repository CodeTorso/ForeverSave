import { GridBackgroundDemo } from "@/components/gridBackground";
import { Post } from "@/components/post";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="dark:bg-black bg-slate-300 h-screen flex-col items-center flex">
      <Navbar />
      <div className="flex flex-col items-center">
        <GridBackgroundDemo />
        <Post />
      </div>
    </div>
  );
}
