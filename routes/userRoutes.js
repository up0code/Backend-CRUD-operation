const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.post("/", controller.createUser);
router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);
router.options("/", (req, res) => res.sendStatus(200));

module.exports = router;