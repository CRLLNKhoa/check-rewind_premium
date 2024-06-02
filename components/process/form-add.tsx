import { TLog } from "@/app/logs/new/page";
import React, { SetStateAction } from "react";
import ChoiceTeam from "./choice-team";

function FormAdd({
  data,
  setData,
}: {
  data: TLog;
  setData: (state: TLog) => void;
}) {
  return (
    <form className="flex flex-col py-6 gap-12">
      <div className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center">
          <p className="mr-2 font-bold text-[#FFBD00]">DAY</p>
          <input
            value={data.day}
            onChange={(e) => setData({ ...data, day: Number(e.target.value) })}
            required
            placeholder="Nhập day của bạn..."
            min="0"
            max="100000"
            type="number"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <p className="mr-2 font-bold text-[#CC2E29]">REWINDS</p>
          <input
            value={data.rewind}
            onChange={(e) =>
              setData({ ...data, rewind: Number(e.target.value) })
            }
            required
            placeholder="Nhập rewind của bạn..."
            min="0"
            max="1000000"
            type="number"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <p className="mr-2 font-bold text-[#CC2E29]">WEAPONS</p>
          <input
            value={data.weapon}
            onChange={(e) =>
              setData({ ...data, weapon: Number(e.target.value) })
            }
            required
            min="0"
            type="number"
            placeholder="Nhập level vũ khí của bạn..."
            className="w-[320px] outline-none border-b px-4"
          />
        </div>
      </div>
      <div className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center">
          <img src="/runes/crit.webp" alt="rune" className="size-8" />
          <input
            value={data.rune_crit}
            onChange={(e) =>
              setData({ ...data, rune_crit: String(e.target.value) })
            }
            required
            placeholder="LV(UNL)"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <img src="/runes/dame.webp" alt="rune" className="size-8" />
          <input
            value={data.rune_dame}
            onChange={(e) =>
              setData({ ...data, rune_dame: String(e.target.value) })
            }
            required
            placeholder="LV(UNL)"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <img src="/runes/hero.webp" alt="rune" className="size-8" />
          <input
            value={data.rune_hero}
            onChange={(e) =>
              setData({ ...data, rune_hero: String(e.target.value) })
            }
            required
            placeholder="LV(UNL)"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <img src="/runes/heal.webp" alt="rune" className="size-8" />
          <input
            value={data.rune_heal}
            onChange={(e) =>
              setData({ ...data, rune_heal: String(e.target.value) })
            }
            placeholder="LV"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <img src="/runes/cc.webp" alt="rune" className="size-8" />
          <input
            value={data.rune_cc}
            onChange={(e) =>
              setData({ ...data, rune_cc: String(e.target.value) })
            }
            placeholder="LV"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <img src="/runes/mana.webp" alt="rune" className="size-8" />
          <input
            value={data.rune_mana}
            onChange={(e) =>
              setData({ ...data, rune_mana: String(e.target.value) })
            }
            placeholder="LV"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
      </div>
      <div className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center">
          <img src="/skill/em.webp" alt="rune" className="size-8" />
          <input
            value={data.skill_em}
            onChange={(e) =>
              setData({ ...data, skill_em: String(e.target.value) })
            }
            required
            placeholder="LV"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <img src="/skill/bd.webp" alt="rune" className="size-8" />
          <input
            value={data.skill_bd}
            onChange={(e) =>
              setData({ ...data, skill_bd: String(e.target.value) })
            }
            required
            placeholder="LV"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <img src="/skill/up.webp" alt="rune" className="size-8" />
          <input
            value={data.skill_up}
            onChange={(e) =>
              setData({ ...data, skill_up: String(e.target.value) })
            }
            required
            placeholder="LV"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <img src="/skill/in.webp" alt="rune" className="size-8" />
          <input
            value={data.skill_in}
            onChange={(e) =>
              setData({ ...data, skill_in: String(e.target.value) })
            }
            required
            placeholder="LV"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <img src="/skill/hl.webp" alt="rune" className="size-8" />
          <input
            value={data.skill_hl}
            onChange={(e) =>
              setData({ ...data, skill_hl: String(e.target.value) })
            }
            required
            placeholder="LV"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <img src="/skill/ms.webp" alt="rune" className="size-8" />
          <input
            value={data.skill_ms}
            onChange={(e) =>
              setData({ ...data, skill_ms: String(e.target.value) })
            }
            required
            placeholder="LV"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
        <div className="flex items-center">
          <img src="/skill/bs.webp" alt="rune" className="size-8" />
          <input
            value={data.skill_bs}
            onChange={(e) =>
              setData({ ...data, skill_bs: String(e.target.value) })
            }
            required
            placeholder="LV"
            min="0"
            type="text"
            className="outline-none border-b px-4"
          />
        </div>
      </div>
      <div className="flex flex-col">
      <p className="mr-2 font-bold text-sky-600 uppercase mb-2">Heroes</p>
        <ChoiceTeam  data={data} team={data.hero} setData={setData} />
      </div>
      <div className="flex items-center flex-wrap">
        <p className="mr-2 font-bold text-sky-600">WORLD TREE</p>
        <input
          value={data.world_tree}
          onChange={(e) =>
            setData({ ...data, world_tree: String(e.target.value) })
          }
          required
          placeholder="Nhập theo công thức BT1 AC3 GW2..."
          className="outline-none w-full max-w-[600px] border-b px-4"
        />
      </div>
    </form>
  );
}

export default FormAdd;
