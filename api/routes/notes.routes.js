const express = require('express');

const router = express.Router();

const messages = require('../messages/messages.js');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const joiMiddleWare = require('express-joi-validation').createValidator({});

const notesSchema = require('../validation/notes.schema.js');

router.get('/notes', async (req, res) => {

    try {

        const notes = await prisma.note.findMany();
        res.json(notes);

    } catch (err) {

        res.status(500).json({ error: err });

    }
});

router.post('/notes', joiMiddleWare.body(notesSchema), async (req, res) => {
    
    try {
        
        const { name, description, isDone } = req.body;

        const createNote = await prisma.note.create({
            data: {
                name: name,
                description: description,
                isDone: isDone,
            },
        });

        res.status(201).json({ message: messages.create("Note"), note: createNote });

    } catch (err) {

        res.status(500).send({ error: err });
        
    }

});

router.get('/notes/:id', async (req, res) => {

    try {

        const getNote = await prisma.note.findUnique({
            where: {
                id: Number(req.params.id),
            }
        });

        res.status(200).json(getNote);

    } catch(err) {

        res.status(500).json({ error: err });

    }
    
});

router.put('/notes/:id', joiMiddleWare.body(notesSchema), async (req, res) => {

    try {

        const { name, description, isDone } = req.body;

        const updateNote = await prisma.note.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                name: name,
                description: description,
                isDone: isDone,
            }
        });

        res.status(201).json({ message: messages.update("Note"), note: updateNote });

    } catch (err) {
        res.status(500).json({ error: err });
    }

});

router.delete('/notes/:id', async (req, res) => {

    try {

        const deleteNote = await prisma.note.delete({
            where: {
                id: Number(req.params.id),
            },
        });

        res.status(201).json({ message: messages.delete("Note"), note: deleteNote });

    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router;