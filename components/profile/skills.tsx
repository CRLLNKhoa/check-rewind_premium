import React from "react";
import { TSkills } from "./profile-game";

function Skills({ skills, setSkills }: { skills: TSkills; setSkills: any }) {
  return (
    <div className="flex items-center flex-wrap gap-6">
      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>ELIXIR MASTERY: </h1>
        <input
          value={skills.em}
          onChange={(e) => setSkills({ ...skills, em: e.target.value })}
          required
          type="text"
          className="outline-none pl-4 border-b"
          placeholder="Nhập level..."
        />
      </div>

      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>BEAUTIFULL DIASTER: </h1>
        <input
          value={skills.bd}
          onChange={(e) => setSkills({...skills, bd: e.target.value})}
          required
          type="text"
          className="outline-none pl-4 border-b"
          placeholder="Nhập level..."
        />
      </div>

      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>UNTAPPED POWER: </h1>
        <input
          value={skills.up}
          onChange={(e) => setSkills({...skills, up: e.target.value})}
          required
          type="text"
          className="outline-none pl-4 border-b"
          placeholder="Nhập level..."
        />
      </div>

      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>INSPIRE: </h1>
        <input
          value={skills.in}
          onChange={(e) => setSkills({...skills, in: e.target.value})}
          required
          type="text"
          className="outline-none pl-4 border-b"
          placeholder="Nhập level..."
        />
      </div>

      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>HARD LABOUR: </h1>
        <input
          value={skills.hl}
          onChange={(e) => setSkills({...skills, hl: e.target.value})}
          required
          type="text"
          className="outline-none pl-4 border-b"
          placeholder="Nhập level..."
        />
      </div>

      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>MOB SLAYER: </h1>
        <input
          value={skills.ms}
          onChange={(e) => setSkills({...skills, ms: e.target.value})}
          required
          type="text"
          className="outline-none pl-4 border-b"
          placeholder="Nhập level..."
        />
      </div>

      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>BOSS SLAYER: </h1>
        <input
          value={skills.bs}
          onChange={(e) => setSkills({...skills, bs: e.target.value})}
          required
          type="text"
          className="outline-none pl-4 border-b"
          placeholder="Nhập level..."
        />
      </div>
    </div>
  );
}

export default Skills;
