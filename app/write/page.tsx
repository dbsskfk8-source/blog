import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import EditorClient from "@/components/editor/EditorClient";

export default async function WritePage() {
    const supabase = await createClient();
    const { data: { session } } = await supabase.auth.getSession();

    // 서버 사이드에서 로그인하지 않은 사용자는 접속 차단
    if (!session) {
        redirect("/login");
    }

    // 통과 시 클라이언트 에디터 컴포넌트 렌더링
    return <EditorClient />;
}
