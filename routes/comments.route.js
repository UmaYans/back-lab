const { Router } = require("express");
const { CommentController } = require("../controllers/comments.controller");
const authMiddlewares = require("../models/middlewares/auth.middlewares");

const router = Router();

router.post("/comment/:id", authMiddlewares, CommentController.postComments);
router.delete("/comment/:id",authMiddlewares,CommentController.deleteComments);
router.get("/user", authMiddlewares, CommentController.getCommentsByUser);
router.get("/doc/:id", CommentController.getCommentsByDoc);

module.exports = router;
