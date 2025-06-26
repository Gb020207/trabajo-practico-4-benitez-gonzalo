import characters from "../models/characters.models.js";

export const createCharacter = async (req, res) => {
  const { name, ki, race, gender, description } = req.body;
  if (name === "" || ki === "" || gender === "" || race === "") {
    return res.json({
      msg: "No pueden haber espacios vacios exceptuando description",
    });
  }
};
const existingCharacter = await characters.findOne({});
if (existingCharacter) {
  res.status(409).json({
    msg: "Personaje ya existente",
  });
 
  if (gender !== female || gneder !== male){
    res.status(409).json({
        msg:"Solo puede ser male o female"
    })
  }
  if(ki ){

  }
  if(race !== saiyan ||race !== namekian ||race !== human ||race !== android ||race !== frieza-race || race !== god ||race !== jiren-race || race !== angel || race !== Nucleico-benigno ||race !== Nucleico || race !== evil) {
   res.status(409).json({
    msg: "solo puedes colocar las razas existentes en el universo de dragon ball"
   })
  }
}

export const findALLcharacters = async (req, res) => {
  try {
    const characters = await characters.findALL();
    res.json({
      count: character.legth,
      data: character,
    });
  } catch (error) {
    res.status(500).json({ error: err.menssage });
  }
};
export const updateCharacter = async (req, res) => {
  try {
    const characters = await characters.update({name, ki, race, gender, description})
    if(name, ki, gender, race === ''){
        res.status(409).json({
            msg:"no puedes dejar espacios en blanco para actualizar se necesitan datos validos"
        })
    }
  } catch (error) {}
};
export const deleteCharacters = async (req, res) => {
  try {
    const characters = await characters.delete();
  } catch (error) {}
};
