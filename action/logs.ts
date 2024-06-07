"use server";
import createSupabaseServerClient from "@/lib/supabase";
import { TLog } from "@/types";



export async function addLog(newLog:TLog) {
    try {
      const supabase = await createSupabaseServerClient();
      const { data, error } = await supabase
        .from("log")
        .insert([{ ...newLog }])
        .select("*");
      if (error) {
        return { status: 400, data: [error] };
      } else return { status: 200, data: data };
    } catch (error) {
      console.log(error);
    }
  }