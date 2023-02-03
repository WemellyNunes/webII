// Questao 1

import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
  {
    id: { type: String },
    nomeFantasia: { type: String, required: true },
    razaoSocial: { type: String },
    endereco:{type:String, required:true},
    telefone:{type: Number}
  },
  {
    versionKey: false
  }
);

const editoras = mongoose.model('editoras', editoraSchema);

export default editoras
