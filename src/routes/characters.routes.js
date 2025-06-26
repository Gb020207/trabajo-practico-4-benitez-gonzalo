import { Router } from 'express';
import { createCharacter, findALLcharacters, updateCharacter,deleteCharacters } from '../controller/characters.controllers.js';
const router = Router();

router.post('/', [], createCharacter);
router.get('/:id', findALLcharacters);
router.put('/characters/update/:id', updateCharacter);
router.delete('/characters/delete/:id')


export default router;