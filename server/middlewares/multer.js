import multer from "multer";

// Use memory storage instead of disk (for Render compatibility)
const storage = multer.memoryStorage();

export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});