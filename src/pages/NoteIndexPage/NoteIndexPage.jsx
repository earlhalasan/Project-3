import NoteList from "../../components/NoteList/NoteList";
import NoteListForm from "../../components/NoteListForm/NoteListForm";
import { Link } from "react-router-dom";
import * as noteAPI from "../../utilities/notes-api";
import { useState, useEffect } from "react";

export default function NoteIndexPage({ allNotes, setAllNotes, setUpdated }) {
  return (
    <>
      <div className="pt-6 flex">
        <div className="flex flex-col justify-start overflow-y-hidden">
          <div className="px-8 justify-start">
            <h1 className=" font-semibold px-2 text-3xl text-left text-2xl bg-[#f7f7f2] text-lg border-b-[1px] border-black pb-1">
              <i className="fa-solid fa-pen-to-square mt-1.5 text-orange-400"></i>
              &nbsp; Notes
            </h1>
          </div>

          <div className=" flex h-96 w-[80vw]">
            <div className="">
              {allNotes ? (
                <NoteList
                  allNotes={allNotes}
                  setAllNotes={setAllNotes}
                  setUpdated={setUpdated}
                />
              ) : (
                "loading"
              )}
            </div>

            <div className="px-5 py-7">
              <NoteListForm
                allNotes={allNotes}
                setAllNotes={setAllNotes}
                setUpdated={setUpdated}
              />
            </div>
          </div>
        </div>

        {/* do we want new note button on note landing page? -K */}
        {/* <Link to={`/notes/new`}>
          <button className="border-1 border-black bg-black  rounded text-white text-medium px-1 mx-2">
            Create new todo
          </button>
        </Link> */}
        {/* <NoteList /> */}
      </div>
    </>
  );
}
