import { Router } from "express";
import { userRouter } from "../models/user/user.router";
import { authRouter } from "../models/auth/auth.router";
import { tasksRouter } from "../models/tasks/tasks.router";

const router = Router()

const routes = [
    {
        path: "/users",
        route: userRouter
    },
    {
        path: "/auth",
        route : authRouter
    },
    {
        path: "/tasks",
        route: tasksRouter
    }
]

routes.forEach((route) => {
    router.use(route.path, route.route);
})


export default router;