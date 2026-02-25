"use client";

import { useState } from "react";
import { login, signup } from "@/app/login/actions";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export function AuthForm({ initialMode = "login" }: { initialMode?: "login" | "signup" }) {
    const [mode, setMode] = useState<"login" | "signup">(initialMode);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full max-w-sm mx-auto">
            <div className="bg-[#1e2532] border border-[#2b3341] rounded-2xl p-6 sm:p-8 shadow-2xl">
                <form className="space-y-6">
                    {/* Email input */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200" htmlFor="email">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full pl-10 pr-4 py-2 bg-[#171c26] border border-[#2b3341] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="name@company.com"
                            />
                        </div>
                    </div>

                    {/* Password input */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-200" htmlFor="password">
                                Password
                            </label>
                            {mode === "login" && (
                                <a href="#" className="text-xs text-blue-400 hover:text-blue-300 transition">
                                    Forgot password?
                                </a>
                            )}
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                className="w-full pl-10 pr-10 py-2 bg-[#171c26] border border-[#2b3341] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300 transition focus:outline-none"
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        formAction={mode === "login" ? login : signup}
                        className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-[#1e2532] transition"
                    >
                        {mode === "login" ? "Sign In" : "Sign Up"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </form>
            </div>

            <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                    {mode === "login" ? "Don't have an account yet?" : "Already have an account?"}{" "}
                    <button
                        onClick={() => setMode(mode === "login" ? "signup" : "login")}
                        className="font-medium text-blue-400 hover:text-blue-300 transition focus:outline-none"
                    >
                        {mode === "login" ? "Create an account" : "Log in"}
                    </button>
                </p>
            </div>

            <div className="mt-8 flex justify-center space-x-6 text-xs text-gray-500">
                <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
                <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
            </div>
        </div>
    );
}
