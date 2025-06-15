import DashboardPage from "../pages/DashboardPage.jsx";
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from "../routing/routeTree.js";
import { checkAuth } from "../utils/helper.js";

export const DashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path:"/dashboard",
    component: DashboardPage,
    beforeLoad: checkAuth
})  