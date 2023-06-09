import { store } from "../../app/Store"
import { notesApiSlice } from "../notes/NoteApiSlice";
import { usersApiSlice } from "../users/UsersApiSlice";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import React from "react";

const Prefetch = () => {
  useEffect(() => {
    console.log("subscribing");
    const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate());
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

    return () => {
      console.log("unsubscribing");
      notes.unsubscribe();
      users.unsubscribe();
    };
  }, []);

  return <Outlet />;
};

export default Prefetch;