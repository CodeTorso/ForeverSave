"use client";

import Navbar from "@/components/navbar";
import { Note } from "@/components/note";
import { useState } from "react";

export default function Home() {
  const [create, setcreate] = useState(true);
  function createState(value: boolean): void {
    setcreate(value);
  }
  return (
    <div>
      <Navbar createExists={create} createExistence={createState} />
      <Note createExists={create} />
    </div>
  );
}
