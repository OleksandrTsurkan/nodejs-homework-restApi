const express = require("express");
const ctrl = require("../../controllers/contacts");

const router = express.Router();
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.postContact);

router.put(
  "/:contactId",
  validateBody(schemas.putSchema),
  isValidId,
  ctrl.putContact
);

router.patch(
  "/:contactId",
  validateBody(schemas.patchSchema),
  isValidId,
  ctrl.patchFavorite
);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

module.exports = router;
