import characters from "../models/characters.models.js";

export const createCharacter = async(req, res) => {
     const {name, ki, race, gender, description} = req.body;
        if (name === ''|| ki === ''|| gender === ''||race === '' ){
            return res.json({
                  msg: "No pueden haber espacios vacios exceptuando description"
            })  
        }
       const character = await characters.create(req.body)
       res.status(201).json(character);
     }


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
};
export const updateCharacter = async(req, res) =>{
    try{

    } catch{

    }
}
