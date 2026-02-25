import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
        return redirect("/login?error=Could not sign out");
    }

    revalidatePath("/", "layout");
    redirect("/login");
}
