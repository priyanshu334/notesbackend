import express from 'express';
import { getallNotes ,createNote,getNoteById,updateNote,deleteNote} from '../controllers/notesController.js';
const router = express.Router();


router.get("/", getallNotes);
router.post("/", createNote);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
export default router;