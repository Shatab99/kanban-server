import resSend from "../../GlobalHandler/respondSend";
import catchAsync from "../../Utils/catchAsync.global";
import { tasksModel } from "./task.model";

const createTask = catchAsync(async (req, res) => {
    const { id, email } = res.locals.user;

    await tasksModel.create({ userId: id, email, ...req.body });

    resSend(res, 200, "Task created successfully", {})
})

const updateTask = catchAsync(async (req, res) => {
    const { id, email } = res.locals.user;
    const { taskId } = req.body;

    const task = await tasksModel.findOneAndUpdate(
        { _id: taskId, userId: id, email },
        { ...req.body },
        { new: true }
    );

    if (!task) throw new Error("Task not found or you don't have permission to update this task");

    resSend(res, 200, "Task updated successfully", task);
})

const deleteTask = catchAsync(async (req, res) => {
    const { id, email } = res.locals.user;
    const { taskId } = req.params;

    const task = await tasksModel.findOneAndDelete({ _id: taskId, userId: id, email });

    if (!task) throw new Error("Task not found or you don't have permission to delete this task");

    resSend(res, 200, "Task deleted successfully", {});
})

const findTodoTasks = catchAsync(async (req, res) => {
    const { id, email } = res.locals.user;

    const tasks = await tasksModel.find({ userId: id, email, status: "todo" });

    if (!tasks.length) throw new Error("No todo tasks found");

    resSend(res, 200, "Todo tasks retrieved successfully", tasks);
})

const findInProgressTasks = catchAsync(async (req, res) => {
    const { id, email } = res.locals.user;

    const tasks = await tasksModel.find({ userId: id, email, status: "in-progress" });

    if (!tasks.length) throw new Error("No in-progress tasks found");

    resSend(res, 200, "In-progress tasks retrieved successfully", tasks);
})

const findCompletedTasks = catchAsync(async (req, res) => {
    const { id, email } = res.locals.user;

    const tasks = await tasksModel.find({ userId: id, email, status: "completed" });

    if (!tasks.length) throw new Error("No completed tasks found");

    resSend(res, 200, "Completed tasks retrieved successfully", tasks);
})

export const tasksController = {
    createTask,
    updateTask,
    deleteTask,
    findTodoTasks,
    findInProgressTasks,
    findCompletedTasks
}