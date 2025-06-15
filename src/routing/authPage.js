import AuthPage from "../pages/AuthPage";
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from "../routing/routeTree.js";

export const authRoute = createRoute({
    getParentRoute: () => rootRoute,
    path:"/auth",
    component: AuthPage,
})