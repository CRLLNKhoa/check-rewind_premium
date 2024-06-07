"use server";
import createSupabaseServerClient from "@/lib/supabase";
import { currentUser } from "@clerk/nextjs/server";

export async function createStat() {
  const user = await currentUser();
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("user")
      .insert([{ user_id: user?.id }])
      .select();
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function getStat() {
  const user = await currentUser();
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("user")
      .select(`*, log(*)`)
      .eq("user_id", user?.id);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function updateStat(newStats: any) {
  const user = await currentUser();
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("user")
      .update(newStats)
      .eq("user_id", user?.id);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function getUserStat(name: string) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("username", name);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}
