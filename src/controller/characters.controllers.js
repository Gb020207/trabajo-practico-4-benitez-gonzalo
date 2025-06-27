import { where } from "sequelize";
import Characters from "../models/characters.models.js";
export const findALLcharacters = async (req, res) => {
  try {
    const characters = await characters.findALL();
    res.json({
      count: Characters.legth,
      data: Characters,
    });
  } catch (error) {
    res.status(500).json({ error: err.menssage });
  }
};
export const getCharacterByID = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Characters.findByPk(id);

    if (!character) {
      return res.status(404).json({ message: "Personaje no encontrado." });
    }

    res.status(200).json(character);
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .json({ message: "Ocurrió un error interno en el servidor." });
  }
};

export const createCharacter = async (req, res) => {
  const { name, ki, race, gender, description } = req.body;
  try {
    //Validacion para que los datos no se reciban vacios.
    if (name === undefined || name === "")
      return res
        .status(400)
        .json({
          errorMessage: "Debe completar el campo 'name', no puede estar vacio.",
        });
    if (ki === undefined || name === "")
      return res
        .status(400)
        .json({
          errorMessage: "Debe completar el campo'ki ', no puede estar vacio.",
        });
    if (race === undefined || name === "")
      return res
        .status(400)
        .json({
          errorMessage: "Debe completar el campo 'race', no puede estar vacio.",
        });
    if (gender === undefined || name === "")
      return res
        .status(400)
        .json({
          errorMessage:
            "Debe completar el campo 'gender', no puede estar vacio.",
        });

    //Validación para que los nombres sean únicos y no se repitan para que no haya incongruencias
    const nameUnique = await Characters.findOne({ where: { name } });

    if (nameUnique)
      return res
        .status(400)
        .json({
          errorMessage: "'name' el nombre debe ser único por personaje.",
        });

    //Validación para que el ki sea un número entero y no un número con decimales
    const kiInt = Math.floor(ki);
    if (ki !== kiInt)
      return res
        .status(400)
        .json({ Message: "el ki debe de ser un número entero." });

    //Validación para que el género sea solo Female o Male si o si y que no tenga dos generos.
    if (!(gender === "Female" || gender === "Male"))
      return res
        .status(400)
        .json({
          errorMessage: "'gender' el genero debe ser 'Femenino' o 'Masculino'.",
        });

    //Si la descripción no viene vacia se valida que sea un string para que se coloque como cadena de texto en la información del personaje
    if (description !== undefined) {
      if (typeof description !== "string") {
        return res
          .status(400)
          .json({
            errorMessage:
              "La 'description' debe de ser cadena de texto(caracteres).",
          });
      }
    } //Validacion para que los datos no se reciban vacios.
    if (name === undefined || name === "")
      return res
        .status(400)
        .json({
          errorMessage: "Debe completar el campo 'name', no puede estar vacio.",
        });
    if (ki === undefined || name === "")
      return res
        .status(400)
        .json({
          errorMessage: "Debe completar el campo'ki ', no puede estar vacio.",
        });
    if (race === undefined || name === "")
      return res
        .status(400)
        .json({
          errorMessage: "Debe completar el campo 'race', no puede estar vacio.",
        });
    if (gender === undefined || name === "")
      return res
        .status(400)
        .json({
          errorMessage:
            "Debe completar el campo 'gender', no puede estar vacio.",
        });

    //Validación para que los nombres sean únicos y no se repitan para que no haya incongruencias
    const nameUniques = await Characters.findOne({ where: { name } });

    if (nameUniques)
      return res
        .status(400)
        .json({
          errorMessage: "'name' el nombre debe ser único por personaje.",
        });

    //Validación para que el ki sea un número entero y no un número con decimales
    const kiInts = Math.floor(ki);
    if (ki !== kiInts)
      return res
        .status(400)
        .json({ Message: "el ki debe de ser un número entero." });

    //Validación para que el género sea solo Female o Male si o si y que no tenga dos generos.
    if (!(gender === "Female" || gender === "Male"))
      return res
        .status(400)
        .json({
          errorMessage: "'gender' el genero debe ser 'Femenino' o 'Masculino'.",
        });

    //Si la descripción no viene vacia se valida que sea un string para que se coloque como cadena de texto en la información del personaje
    if (description !== undefined) {
      if (typeof description !== "string") {
        return res
          .status(400)
          .json({
            errorMessage:
              "La 'description' debe de ser cadena de texto(caracteres).",
          });
      }
    }

    await Characters.create({ name, ki, race, gender, description });
    return res.status(200).json({
      msg: "el personaje fue creado con exito",
    });
  } catch (error) {
    console.log("Error al crear personaje", error);
    res.status(500).json({
      msg: error.menssage,
    });
  }
};

// const existingCharacter = async (req, res) => {
//   await Characters.findOne();
//   if (existingCharacter) {
//     res.status(409).json({
//       msg: "Personaje ya existente",
//     });
//     if (ki < 0) {
//       res.status(409).json({
//         msg: "el ki no puede ser menor a 0 ingrese el ki de 0 hacia arriba",
//       });
//     }
//     if (
//       race !== saiyan ||
//       race !== namekian ||
//       race !== human ||
//       race !== android ||
//       race !== frieza - race ||
//       race !== god ||
//       race !== jiren - race ||
//       race !== angel ||
//       race !== Nucleico - benigno ||
//       race !== Nucleico ||
//       race !== evil
//     ) {
//       res.status(409).json({
//         msg: "solo puedes colocar las razas existentes en el universo de dragon ball",
//       });
//     }
//   }
// };

export const updateCharacter = async (req, res) => {
  try {
    const { name, ki, race, gender, description } = req.body;
    if (({ name }, { ki }, { gender }, { race } == "")) {
      return res.status(409).json({
        msg: "no puedes dejar espacios en blanco para actualizar se necesitan datos validos",
      });
    }
  } catch (error) {}
};
export const deleteCharacters = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Characters.destroy({ where: { id: id } });

    if (result === 0) {
      return res
        .status(404)
        .json({ message: "Personaje no encontrado para eliminar." });
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Ocurrió un error interno en el servidor." });
  }
};
