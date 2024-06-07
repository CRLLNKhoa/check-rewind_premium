import React from "react";
import { TRunes } from "./profile-game";

function Runes({ runes, setRunes }: { runes: TRunes; setRunes: any }) {
  return (
    <div className="flex items-center flex-wrap gap-6">
      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>Rune Crit Dame: </h1>
        <input
          value={runes.crit}
          onChange={(e) => setRunes({ ...runes, crit: e.target.value })}
          required
          pattern="^([a-zA-Z0-9]{1,3})-([a-zA-Z0-9]{1,3})$"
          type="text"
          className="outline-none pl-4 border-b"
          placeholder="level-unleash"
        />
      </div>

      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>Rune Dame: </h1>
        <input
          value={runes.dame}
          onChange={(e) => setRunes({...runes, dame: e.target.value})}
          required
          pattern="^([a-zA-Z0-9]{1,3})-([a-zA-Z0-9]{1,3})$"
          type="text"
          className="outline-none pl-4 border-b"
         placeholder="level-unleash"
        />
      </div>

      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>Rune Hero: </h1>
        <input
          value={runes.hero}
          onChange={(e) => setRunes({...runes, hero: e.target.value})}
          required
          pattern="^([a-zA-Z0-9]{1,3})-([a-zA-Z0-9]{1,3})$"
          type="text"
          className="outline-none pl-4 border-b"
         placeholder="level-unleash"
        />
      </div>

      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>Rune HP: </h1>
        <input
          value={runes.heal}
          onChange={(e) => setRunes({...runes, heal: e.target.value})}
          required
          type="text"
          className="outline-none pl-4 border-b"
          placeholder="Nhập level..."
        />
      </div>

      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>Rune Crit Chance: </h1>
        <input
          value={runes.cc}
          onChange={(e) => setRunes({...runes, cc: e.target.value})}
          required
          type="text"
          className="outline-none pl-4 border-b"
          placeholder="Nhập level..."
        />
      </div>

      <div className="p-4 bg-white rounded-lg flex items-center">
        <h1>Rune Mana: </h1>
        <input
          value={runes.mana}
          onChange={(e) => setRunes({...runes, mana: e.target.value})}
          required
          type="text"
          className="outline-none pl-4 border-b"
          placeholder="Nhập level..."
        />
      </div>
    </div>
  );
}

export default Runes;
