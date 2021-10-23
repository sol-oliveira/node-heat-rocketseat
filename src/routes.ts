import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessgeController";
import { GetLastThreeMessagesController } from "./controllers/GetLastThreeMessagesController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);
router.get("/messages/last3", new GetLastThreeMessagesController().handle);

export { router }