"use server";

import mongoose from "mongoose";

mongoose.connect("mongodb+srv://" + process.env.DB_MONGO_URI);

const noteSchema = new mongoose.Schema({
  title: String,
  note: String,
});

const Note = mongoose.model("Note", noteSchema);

export async function createNote(
  title: string,
  note: string
): Promise<Boolean> {
  return new Promise<Boolean>((resolve, reject) => {
    const newNote = new Note({ title: title, note: note });
    newNote
      .save()
      .then(() => resolve(true))
      .catch(() => reject(false));
  });
}

// type Note = {
//   title: string;
//   note: string;
// } | null

export async function TitleExists(title: string): Promise<boolean> {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      const existingDocument: {
        title: string;
        note: string;
      } | null = await Note.findOne({ title });
      if (existingDocument) {
        resolve(false);
      } else {
        resolve(true);
      }
    } catch (error) {
      resolve(false);
    }
  });
}

type Note = {
  title: string;
  note: string;
};

export async function searchTitleFn(title: string): Promise<Note> {
  return new Promise<Note>(async (resolve, reject) => {
    try {
      const existingDocument: Note | null = await Note.findOne({ title });
      if (existingDocument) {
        const { title, note } = existingDocument;
        resolve({ title, note });
      } else {
        resolve({
          title: "",
          note: "lol! No Note found with that title! But you may create one!",
        });
      }
    } catch (error) {
      resolve({
        title: "",
        note: "lol! Something wrong! Maybe the note does not exist :/",
      });
    }
  });
}
