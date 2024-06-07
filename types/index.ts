import { THero } from "@/components/layouts/select-team"
import { TRunes, TSkills } from "@/components/profile/profile-game"

export type TLog = {
    user_id: string,
    team: THero[],
    skills: TSkills,
    world_tree?: string,
    current_day: number,
    note?: string,
    runes: TRunes
}

export type TUser = {
    user_id: string,
    team: THero[],
    skills: TSkills,
    world_tree?: string,
    current_day: number,
    runes: TRunes,
    bio: string,
    facebook: string
}