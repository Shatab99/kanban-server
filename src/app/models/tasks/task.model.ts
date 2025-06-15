import { model, Schema } from "mongoose";

export type Ttasks = {
    email: string;
    userId: string;
    title: string;
    description: string;
    priority: "low" | "medium" | "high";
    status: "todo" | "in-progress" | "completed";
    dueDate: Date;
}


const tasksSchema = new Schema<Ttasks>({
    email: { type: String, required: true },
    userId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    status: { type: String, enum: ["todo", "in-progress", "completed"], default: "todo" },
    dueDate: { type: Date, required: true }
}, {
    timestamps: true
})


export const tasksModel = model<Ttasks>("Task", tasksSchema);