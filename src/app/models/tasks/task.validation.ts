import { z } from "zod";

export const taskValidation = z.object({
    body : z.object({
        title: z.string().min(2).max(100),
        description: z.string().min(5).max(500),
        priority: z.enum(["low", "medium", "high"]),
        status: z.enum(["todo", "in-progress", "completed"]),
        dueDate: z.date()
    })
})

export const updateTaskValidation = z.object({
    body : z.object({
        taskId: z.string().min(1, "Task ID is required"),
        title: z.string().min(2).max(100).optional(),
        description: z.string().min(5).max(500).optional(),
        priority: z.enum(["low", "medium", "high"]).optional(),
        status: z.enum(["todo", "in-progress", "completed"]).optional(),
        dueDate: z.date().optional()
    })
})