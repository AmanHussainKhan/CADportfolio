import React from "react";
import Toplogo from "../Component/TOPLOGO/Toplogo";
import ContactForm from "../Component/ContactForm/ContactForm";

function ConnectPage() {
  return (
    <div className="w-screen h-screen flex  sm:justify-between flex-col bg-[#C9DABF]">
      <div>
        <nav>
          <Toplogo />
        </nav>
        <main className="w-full flex justify-center mt-16">
          <ContactForm />
        </main>
      </div>
      <footer className="text-center mt-16  sm:pb-2 text-slate-500">
        Thank You and visit again.
      </footer>
    </div>
  );
}

export default ConnectPage;
