import Note from '../models/notes.js';
export const getallNotes =async (req,res)=>{

    try{
        const notes = await Note.find({});
        res.status(200).json(notes);

    }catch(err){
        res.status(500).json({message:"Server Error"})
    }
}


export const createNote = async (req,res)=>{
    try{
        const {title,content} = req.body;
        const newNote = new Note({title,content});
        await newNote.save();
        res.status(201).json(newNote);
    }
    catch(err){
        res.status(500).json({message:"Server Error"})
    }
}

export const getNoteById = async (req,res)=>{
    try{
        const id = req.params.id;
        const note = await Note.findById(id);
        if(!note){
            return res.status(404).json({message:"Note not found"});
        }
        res.status(200).json(note);
    }catch(err){
        res.status(500).json({message:"Server Error"})
    }
}

export const updateNote = async (req,res)=>{
    try{
        const id = req.params.id;
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(id,{title,content},{new:true});
        if(!updatedNote){
            return res.status(404).json({message:"Note not found"});
        }
        res.status(200).json(updatedNote);
    }catch(err){
        res.status(500).json({message:"Server Error"})
    }
}

export const deleteNote = async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteNote = await Note.findByIdAndDelete(id);
        if(!deleteNote){
            return res.status(404).json({message:"Note not found"});
        }
        res.status(200).json({message:"Note deleted successfully"});
    }catch(err){
        res.status(500).json({message:"Server Error"})
    }
}