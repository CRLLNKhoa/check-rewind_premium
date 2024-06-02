import ChangeTheme from "@/components/layouts/change-theme";
import SetNavbar from "@/components/layouts/set-navbar";
import React from "react";

function Settings() {
  return (
    <main className="w-full flex justify-center p-4 h-full">
      <div className="w-full max-w-3xl border border-border rounded-lg p-4 bg-background dark:bg-secondary">
        <h1 className="font-bold text-2xl">Settings</h1>
        <div className="flex flex-col mt-8">
          <h2 className="font-bold text-lg">Giao diện trang</h2>
          <ChangeTheme />
          <h2 className="font-bold text-lg mt-8">Navbar trang</h2>
          <SetNavbar />
        </div>
      </div>
    </main>
  );
}

export default Settings;
