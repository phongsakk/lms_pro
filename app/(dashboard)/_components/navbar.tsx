import React from "react"
import NavbarRoutes from "@/components/navbar-routes"

import MobileSidebar from "./mobile-sidebar"

const Navbar = () => {
    return (
        <div>
            <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
                <MobileSidebar />
                <NavbarRoutes />
            </div>
        </div>
    )
}

export default Navbar
