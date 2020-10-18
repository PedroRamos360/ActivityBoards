const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Board = require('../models/board');

const router = express.Router();

router.use(authMiddleware);

// rota pra listar todos bords
router.get('/:userId', async (req, res) => {
   try {
      const boards = await Board.find().populate('user');
      const userBoards = [];
      try {
         boards.forEach(board => {
            if (board.user._id == req.params.userId) {
               userBoards.push(board);
            }
         });
      } catch {
         return res.send();
      }

      return res.send({ userBoards });
   } catch (error) {
      return res.status(400).send(error);
   }
});

// rota para listar todos boards de um usuário
router.get('/:boardId', async (req, res) => {
   try {
      const board = await Board.findById(req.params.boardId).populate('user');

      return res.send({ board });
   } catch (error) {
      return res.status(400).send(error);
   }
});

// rota para adicionar um board
router.post('/', async (req, res) => {
   try {
      const board = await Board.create({ title: req.body.title, user: req.userId });
      
      return res.send({ board });
   } catch (error) {
      return res.status(400).send(error);
   }
});

router.put('/:boardId', async (req, res) => {
   try {
      const board = await Board.findByIdAndUpdate(req.params.boardId, {
         title: req.body.title,
      }, { new: true });
      
      return res.send({ board });
   } catch (error) {
      return res.status(400).send(error);
   }
});

router.delete('/:boardId', async (req, res) => {
   try {
      await Board.findByIdAndRemove(req.params.boardId).populate('user');

      return res.send();
   } catch (error) {
      return res.status(400).send(error);
   }
});

module.exports = app => app.use('/boards', router);