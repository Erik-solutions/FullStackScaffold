import { Request, Response } from "express";

export const healthController = {
  getHealth: (_req: Request, res: Response) => {
    const uptime = process.uptime();
    const timestamp = new Date().toISOString();
    
    return res.status(200).json({
      status: "ok",
      uptime,
      timestamp,
    });
  },
};
