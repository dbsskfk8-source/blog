"use client";

import { usePathname } from "next/navigation";

export default function RouteVisibilityWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    if (pathname === "/write") {
        return null;
    }

    return <>{children}</>;
}
