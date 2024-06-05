import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProfileInfo from "@/components/profile/profile-info";
import ProfileGame from "@/components/profile/profile-game";

function ProfilePage() {
  return (
    <main className="flex w-full flex-col items-center justify-center py-6">
      <div className="w-full max-w-[1024px] min-h-[320px] p-4 rounded-lg bg-blur-white backdrop-blur-md flex flex-col">
      <h1 className="text-xl text-sky-600">Thông tin chung</h1>
      <ProfileInfo />
        <Accordion type="multiple">
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl text-sky-600">Thông tin game</AccordionTrigger>
            <AccordionContent>
                <ProfileGame />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}

export default ProfilePage;
