"use client"
import React from "react";
import FormNewLog from "@/components/addlogpage/form-add-log";

function NewLogPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center py-6">
      <div className="w-full max-w-[1024px] min-h-[320px] p-4 rounded-lg bg-blur-white backdrop-blur-md flex flex-col">
      <div className="flex items-end w-full flex-wrap gap-6 justify-end">
      </div>
        <FormNewLog />
      </div>
    </main>
  );
}

export default NewLogPage;
