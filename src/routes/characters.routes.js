import { Router } from 'express';
import { createCharacter, findALLcharacters } from '../controller/characters.controllers.js';
const router = Router();

router.post('/', [], createCharacters);
router.get('/', findALLcharacters);

export default router;