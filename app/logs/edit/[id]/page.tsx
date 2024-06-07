"use client"
import React from "react";
import EditNewLog from "@/components/addlogpage/form-edit-log";

function EditLogPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center py-6">
      <div className="w-full max-w-[1024px] min-h-[320px] p-4 rounded-lg bg-blur-white backdrop-blur-md flex flex-col">
      <div className="flex items-end w-full flex-wrap gap-6 justify-end">
      </div>
        <EditNewLog />
      </div>
    </main>
  );
}

export default EditLogPage;
