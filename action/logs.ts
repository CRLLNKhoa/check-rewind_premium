"use server";
import createSupabaseServerClient from "@/lib/supabase";
import { TLog } from "@/types";

export async function addLog(newLog: TLog) {
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

export async function getDetailLog(id: number) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("log")
      .select(`*, cmt(*,user(*)),user(*)`)
      .eq("id", id);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function updateLog(id: number, newData: any) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("log")
      .update(newData)
      .eq("id", id)
      .select();
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function deleteLog(id: number) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from("log").delete().eq("id", id);
    if (error) {
      return { status: 400 };
    } else return { status: 200 };
  } catch (error) {
    console.log(error);
  }
}


import { currentUser } from '@clerk/nextjs/server';
export async function addCmt(cmt: string,log_id: number) {
  const user = await currentUser();
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("cmt")
      .insert([{
        user_id: user?.id,
        content:cmt,
        log_id,
      }])
      .select();
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}


export async function getLogs() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("log")
      .select(`*, cmt(*,user(*)),user(*)`).limit(6)
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}