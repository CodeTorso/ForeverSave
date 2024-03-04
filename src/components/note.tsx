"use client";

import { Input } from "./ui/input";
import { createNote } from "@/lib/createNote";
import { TitleExists } from "@/lib/createNote";
import { searchTitleFn } from "@/lib/createNote";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface NoteProps {
  createExists: Boolean;
}

export const Note: React.FC<NoteProps> = ({ createExists }) => {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const callme = async () => {
    const value = await TitleExists(title);
    toast(value ? "note saved" : "some error occured on our side");
    if (value === true) {
      const noteSave = await createNote(title, note);
      console.log(noteSave);
    } else {
      toast("A note with title: " + title + " already exists");
    }
  };

  const trySearch = async () => {
    const note = await searchTitleFn(searchTitle);
    setSearchResult(note.note);
  };
  return (
    <div className=" bg-gray-800 text-gray-100 min-h-[94.2vh] flex justify-center py-12">
      {createExists ? (
        <div className="flex flex-col items-end gap-2">
          <textarea
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            className="min-w-[60vw] flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="bg-gray-800 hover:bg-gray-900"
                variant="outline"
              >
                Save!
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800">
              <DialogHeader>
                <DialogTitle className="text-white">
                  Give a title to your save :)
                </DialogTitle>
                <DialogDescription className="text-gray-300">
                  Give name to your post here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="Title" className="text-right text-white">
                    Title
                  </label>
                  <input
                    id="Title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className="col-span-3 text-white bg-transparent border-[1px] border-gray-300"
                  />
                  <Button
                    className="col-start-4 bg-gray-800 text-white hover:text-white  hover:bg-gray-900"
                    onClick={callme}
                    variant="outline"
                  >
                    Finally Save!
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <div className="min-w-[85vw] max-w-[86vw] sm:min-w-[60vw] sm:max-w-[61vw] flex flex-col gap-12">
          <div className="flex gap-4">
            <Input
              value={searchTitle}
              onChange={(e) => {
                setSearchTitle(e.target.value);
              }}
              className="bg-transparent"
            />
            <Button
              onClick={trySearch}
              variant="outline"
              className="bg-gray-800 border-2 border-gray-200 outline-1 outline-gray-950 hover:bg-gray-900"
            >
              Search
            </Button>
          </div>
          <p className="">{searchResult || "Result will be displayed here!"}</p>
        </div>
      )}
    </div>
  );
};
