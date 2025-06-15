import Home from "../pages/Home";
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from "./routeTree.js";

export const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
})