"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import EditorNavbar from "@/components/editor/EditorNavbar";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { publishPost } from "@/app/write/actions";

// 서버 사이드 렌더링 에러 방지를 위한 동적 임포트
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function EditorClient() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isPublishing, setIsPublishing] = useState(false);

    const handlePublish = async () => {
        if (!title.trim() || !content.trim()) {
            alert("제목과 본문을 입력해주세요.");
            return;
        }

        setIsPublishing(true);
        try {
            await publishPost(title, content);
            // On success, redirect is handled by Server Action
        } catch (error: any) {
            console.error(error);
            alert(error.message);
            setIsPublishing(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col" data-color-mode="dark">
            <EditorNavbar onPublish={handlePublish} isPublishing={isPublishing} />

            <main className="flex-grow flex flex-col mt-8 max-w-[1400px] w-full mx-auto px-6 mb-10">
                <input
                    type="text"
                    placeholder="New Post Title Here..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-transparent text-5xl font-bold text-slate-100 placeholder-slate-600 focus:outline-none mb-8 py-4 px-2 tracking-tight"
                />

                <div className="flex-grow flex flex-col border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl bg-[#0d1117]">
                    <MDEditor
                        value={content}
                        onChange={(val) => setContent(val || "")}
                        height={600}
                        preview="live"
                        hideToolbar={false}
                        className="flex-grow border-none !bg-transparent"
                        textareaProps={{
                            placeholder: "Write your post in Markdown..."
                        }}
                        style={{
                            borderRadius: "0",
                            boxShadow: "none"
                        }}
                    />
                </div>
            </main>
        </div>
    );
}
