import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { userController } from "./api/user-controller";
import { healthController } from "./api/health-controller";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.get("/api/health", healthController.getHealth);
  
  // Users routes
  app.get("/api/users", userController.getUsers);
  app.post("/api/users", userController.createUser);
  app.get("/api/users/:id", userController.getUserById);
  app.put("/api/users/:id", userController.updateUser);
  app.delete("/api/users/:id", userController.deleteUser);

  const httpServer = createServer(app);

  return httpServer;
}
