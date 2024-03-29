import editoras from "../models/Editora.js";



class EditoraController {
    static listarEditora = (req, res) => {
        editoras.find((err, editoras) => {
          res.status(200).json(editoras);
        });
      };
     
  static listarEditoraPorId = (req, res) => { 
    const id = req.params.id
    editoras.findById(id, (err, editoras) => {
      if(err){
        res.status(400).send({message: `${err.message} - Id da Editora não localizado`})
      } else {
        res.status(200).send(editoras)
      }
    })
  }
    static cadastrarEditora = (req, res) => {
        let editorA = new editoras(req.body)
        editorA.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar a Editora` })
            } else {
                res.status(201).send(editorA.toJSON())
            }
        })
    }


    static atualizarEditora = (req, res) => {
        const id = req.params.id
        editoras.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Editora atualizada com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }


    static excluirEditora = (req, res) => {
        const id = req.params.id
        editoras.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Editora foi removida com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

}
export default EditoraController;