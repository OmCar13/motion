"use client";

import { Navbar } from "../(main)/_components/navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full ">
            <Navbar isCollapsed={false} onResetWidth={function (): void {
                throw new Error("Function not implemented.");
            } }/>
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
    )
}

export default MarketingLayout;