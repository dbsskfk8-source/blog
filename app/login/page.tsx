import { AuthForm } from "@/components/auth-form";
import { Layers } from "lucide-react";

export default function LoginPage({
    searchParams,
}: {
    searchParams: { mode?: string; error?: string } | Promise<{ mode?: string; error?: string }>;
}) {
    // searchParams might be a Promise in Next.js 15+ according to typing, handling carefully
    let initialMode: "login" | "signup" = "login";
    let errorMessage = "";

    // Checking synchronously assuming we access keys, but if promise needed, we use a simple sync check in a server component 
    // NOTE: In Next.js App Router Next 15+, searchParams is a promise, so if this throws we can adapt it. Here we use an async wrapper.
    return <LoginContent searchParams={searchParams} />;
}

async function LoginContent({ searchParams }: { searchParams: any }) {
    const params = await searchParams;
    const initialMode = params?.mode === "signup" ? "signup" : "login";
    const errorMessage = params?.error;

    return (
        <div className="min-h-screen bg-[#111620] flex flex-col items-center pt-8 sm:pt-16 md:pt-24 px-4 sm:px-6 lg:px-8 font-sans">
            {/* Header mock */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center text-gray-300 text-sm">
                <div className="flex items-center text-white font-bold text-xl tracking-tight">
                    <Layers className="h-6 w-6 mr-2 text-blue-500" />
                    DevBlog
                </div>
                <div className="hidden md:flex space-x-6 text-gray-400">
                    <a href="#" className="hover:text-white transition">Features</a>
                    <a href="#" className="hover:text-white transition">Community</a>
                    <a href="#" className="hover:text-white transition">Docs</a>
                </div>
                <div className="flex space-x-4 items-center">
                    <a href="/login?mode=login" className="hover:text-white transition font-medium">Log In</a>
                    <a href="/login?mode=signup" className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium">Sign Up</a>
                </div>
            </div>

            <div className="w-full max-w-md mt-16 text-center mb-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
                    {initialMode === "login" ? "Welcome back" : "Create your account"}
                </h2>
                <p className="mt-3 text-base text-gray-400">
                    {initialMode === "login"
                        ? "Enter your credentials to access your workspace."
                        : "Sign up today to get started with DevBlog."}
                </p>

                {errorMessage && (
                    <div className="mt-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-200 text-sm">
                        {errorMessage}
                    </div>
                )}
            </div>

            <AuthForm initialMode={initialMode} />
        </div>
    );
}
