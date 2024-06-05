import React from "react";

function ProfileInfo() {
  return (
    <div className=" p-4 rounded-lg">
      <form className="flex flex-col  gap-4">
        <div className="border p-4 border-white bg-white rounded-lg">
          <input
            required
            className="bg-transparent border-white outline-none w-full h-full"
            placeholder="Nhập bio..."
          />
        </div>

        <div className="border p-4 border-white bg-white rounded-lg">
          <input
            required
            className="bg-transparent border-white outline-none w-full h-full"
            placeholder="Nhập link Facebook..."
          />
        </div>

        <button type="submit" className="bg-sky-600 p-4 text-white rounded-lg">Lưu thông tin</button>
      </form>
    </div>
  );
}

export default ProfileInfo;
