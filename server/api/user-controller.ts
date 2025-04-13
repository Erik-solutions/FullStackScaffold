import { Request, Response } from "express";
import { storage } from "../storage";
import { insertUserSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export const userController = {
  getUsers: async (_req: Request, res: Response) => {
    try {
      const users = await storage.getAllUsers();
      return res.status(200).json({ users, count: users.length });
    } catch (error) {
      console.error("Error fetching users:", error);
      return res.status(500).json({ message: "Failed to fetch users" });
    }
  },

  getUserById: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }

      const user = await storage.getUser(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({ user });
    } catch (error) {
      console.error("Error fetching user:", error);
      return res.status(500).json({ message: "Failed to fetch user" });
    }
  },

  createUser: async (req: Request, res: Response) => {
    try {
      // Validate request body against the schema
      const userData = insertUserSchema.parse(req.body);
      
      // Check if username is already taken
      const existingUser = await storage.getUserByUsername(userData.username);
      if (existingUser) {
        return res.status(409).json({ message: "Username already taken" });
      }

      // Create user
      const newUser = await storage.createUser(userData);
      return res.status(201).json({ user: newUser });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Error creating user:", error);
      return res.status(500).json({ message: "Failed to create user" });
    }
  },

  updateUser: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }

      // Check if user exists
      const existingUser = await storage.getUser(id);
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }

      // Validate request body against the schema
      const userData = insertUserSchema.parse(req.body);
      
      // Check if username is already taken by another user
      const userWithSameUsername = await storage.getUserByUsername(userData.username);
      if (userWithSameUsername && userWithSameUsername.id !== id) {
        return res.status(409).json({ message: "Username already taken" });
      }

      // Update user
      const updatedUser = await storage.updateUser(id, userData);
      return res.status(200).json({ user: updatedUser });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      console.error("Error updating user:", error);
      return res.status(500).json({ message: "Failed to update user" });
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }

      // Check if user exists
      const existingUser = await storage.getUser(id);
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }

      // Delete user
      await storage.deleteUser(id);
      return res.status(204).send();
    } catch (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({ message: "Failed to delete user" });
    }
  },
};
