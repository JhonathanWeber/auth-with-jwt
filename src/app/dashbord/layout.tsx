import getCookies from "@/services/getCookies";
import React from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    getCookies()
    return (
        <section>

            {children}
        </section>
    )
}

//skjfsldjflsdkjf