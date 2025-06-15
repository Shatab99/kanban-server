import { Router } from "express";
import auth from "../../Utils/auth.middleware";
import { tasksController } from "./tasks.controller";
import validate from "../../Utils/validation.middleware";
import { taskValidation, updateTaskValidation } from "./task.validation";

const router = Router()

router.get("/get-todo-tasks", auth(), tasksController.findTodoTasks)
router.get("/get-in-progress-tasks", auth(), tasksController.findInProgressTasks)
router.get("/get-completed-tasks", auth(), tasksController.findCompletedTasks)
router.post("/create-task", validate(taskValidation), auth(), tasksController.createTask)
router.put("/update-task", validate(updateTaskValidation), auth(), tasksController.updateTask)
router.delete("/delete-task/:taskId", auth(), tasksController.deleteTask)


export const tasksRouter = router