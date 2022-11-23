import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import LogInAdmin from "./LoginPage";

const AdminClinic = () => {
  return (
    <section className="flex flex-col bg-main mobile:bg-white">
      <main className="">
        <LogInAdmin />
      </main>
    </section>
  );
};

export default AdminClinic;