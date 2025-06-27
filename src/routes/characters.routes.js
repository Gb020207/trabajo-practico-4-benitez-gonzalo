import { Router } from 'express';
import { createCharacter,findALLcharacters, updateCharacter,deleteCharacters } from '../controller/characters.controllers.js';
const routerCharacters = Router();

routerCharacters.post('/characters', createCharacter);
routerCharacters.get('/characters', findALLcharacters);
routerCharacters.put('/characters/:id', updateCharacter);
routerCharacters.delete('/characters/:id', deleteCharacters);


export default routerCharacters;