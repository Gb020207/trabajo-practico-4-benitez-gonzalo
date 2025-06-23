import characters from "../models/characters.models.js";

export const createCharacter = async(req, res) => {
     const {name, ki, race, gender, description} = req.body;
     try{
        const character = await characters.create({name, ki, gender, description});
        res.status(201).json(character);
     }catch(err){
        res.status(500).json({error: err.message});
     }

};
export const findALLcharacters = async(req, res) =>{
    try{
        const characters = await characters.findALL();
        res.json({
            count: character.legth,
            data: character
        })

    } catch(error){
   res.status(500).json ({error: err.menssage}) 
    }
}
