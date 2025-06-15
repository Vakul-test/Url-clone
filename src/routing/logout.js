import Logout from "../pages/Logout.jsx";
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from "../routing/routeTree.js";
import { checkAuth } from "../utils/helper.js";

export const logoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/logout",
    component: Logout,
    beforeLoad: checkAuth
})  