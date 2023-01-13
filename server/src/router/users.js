const {Router}=require("express");
const { createUser, deleteUser, getUsers, getUser, loginUser, profileUser, verifyToken, recoverPassword } = require("../controllers/usersController");
const router=Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.post("/recoverpassword", recoverPassword);
router.get("/", getUsers);
router.get("/:id", getUser);
router.get("/profile", profileUser);
router.delete("/:id", deleteUser);
router.get("/verify/:token", verifyToken);

module.exports=router;
