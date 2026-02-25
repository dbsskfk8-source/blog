"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function publishPost(title: string, content: string) {
    const supabase = await createClient();
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        throw new Error("Unauthorized");
    }

    if (!title.trim() || !content.trim()) {
        throw new Error("제목과 본문을 입력해주세요.");
    }

    // 1. 임시 슬러그 생성 (띄어쓰기 하이픈 변환, 소문자)
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    // 2. 가장 첫 번째 카테고리(React)를 임의로 지정 (시안에 카테고리 선택란이 없으므로 임의 처리)
    const { data: categoryData } = await supabase.from("categories").select("*").limit(1).single();
    const category_id = categoryData?.id;

    if (!category_id) {
        throw new Error("카테고리를 찾을 수 없습니다. DB 세팅을 확인하세요.");
    }

    // 3. Supabase에 게시글 정보 삽입 (서버 액션 구동)
    const { data, error } = await supabase.from("posts").insert({
        title,
        content,
        // 시안(write.png)에 맞추기 위해 썸네일/부제목 등은 기본값 처리합니다.
        excerpt: content.substring(0, 100) + "...",
        slug: `${slug}-${Math.floor(Math.random() * 1000)}`, // 중복 방지용 랜덤 ID 부착
        cover_image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop",
        category_id,
        author_name: "Anonymous Author",
        author_avatar: "#10B981",
        read_time: Math.ceil(content.length / 500) || 5,
    }).select().single();

    if (error) {
        throw new Error(`발행 중 오류가 발생했습니다: ${error.message}`);
    }

    // 게시 성공 시 상세 페이지로 이동
    redirect(`/posts/${data.slug}`);
}
