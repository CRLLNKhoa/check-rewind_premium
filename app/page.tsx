import Claimp from "@/components/homepage/claimp";
import DailyReward from "@/components/homepage/daily-reward";
import DiscordInvite from "@/components/homepage/discord-invite";
import ListLog from "@/components/homepage/list-log";
import ListTopPlayer from "@/components/homepage/list-top-player";
import MenuList from "@/components/homepage/menu-list";
import SearchPlayerInHomePage from "@/components/homepage/search-player";

export default function Home() {
  return (
    <main className="flex w-full flex-col py-6 items-center justify-center">
      <div className="w-full max-w-[1024px] flex flex-col gap-6 p-4">
        <SearchPlayerInHomePage />
        <DiscordInvite />
        <ListTopPlayer />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-x-4 mt-12">
          <div className="flex flex-col">
            <MenuList />
          </div>
          <div className="col-span-2">
            <ListLog />
          </div>
        </div>
        <Claimp />
      </div>
    </main>
  );
}
