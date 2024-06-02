import ChangeTheme from "@/components/layouts/change-theme";
import SetNavbar from "@/components/layouts/set-navbar";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListNotificationsComment from "@/components/notifications/list-notifications-comments";
import ListNotificationsLog from "@/components/notifications/list-notifications-log";

function Notifications() {
  return (
    <main className="w-full flex justify-center p-4 h-full">
      <div className="w-full max-w-3xl border border-border rounded-lg p-4 bg-background dark:bg-secondary">
        <h1 className="font-bold text-2xl">Thông báo</h1>
        <Tabs defaultValue="cmts" className="w-full mt-8">
          <TabsList className="w-full">
            <TabsTrigger asChild value="cmts">
              <div className="w-1/2 select-none cursor-pointer">Bình luận</div>
            </TabsTrigger>
            <TabsTrigger asChild value="logs">
              <div className="w-1/2 select-none cursor-pointer">Nhật ký</div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cmts">
            <div className="p-4">
              <ListNotificationsComment />
            </div>
          </TabsContent>
          <TabsContent value="logs">
          <div className="p-4">
              <ListNotificationsLog />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

export default Notifications;
