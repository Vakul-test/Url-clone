import { createRootRoute } from "@tanstack/react-router"
import { homeRoute } from "./homePageroute.js"
import { authRoute } from "./authPage.js"
import { DashboardRoute } from "./dashboard.js"
import App from "../App.jsx"
import { logoutRoute } from "./logout.js"

export const rootRoute = createRootRoute({
    component: App
})

export const routeTree = rootRoute.addChildren([
    homeRoute, 
    authRoute, 
    DashboardRoute,
    logoutRoute
])

