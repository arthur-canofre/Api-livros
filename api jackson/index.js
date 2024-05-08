const express = require('express'); 
const bodyParser = require('body-parser');

const app = express(); 
app.use(bodyParser.json());

let livros = [];

app.get('/livros', (req, res) => { 
    res.json(livros); 
    });
    
    app.get('/livros/:id', (req, res) => { 
        const { id } = req.params; 
        const livro = livros.find(v => v.id === id); 
        if (livro) { 
        res.json(livro); 
        } else { 
        res.status(404).json({ message: 'Livro não encontrado.' }); 
        } 
        });

        app.post('/livros', (req, res) => { 
            const { id, editora, generos, autor } = req.body; 
            const livro= { id, editora, generos, autor, numPags }; 
            livros.push(livro); 
            res.status(201).json({ message: 'Livro cadastrado com sucesso.' }); 
            });

            app.put('/livros/:id', (req, res) => { 
                const { id } = req.params; 
                const { editora, generos, autor } = req.body; 
                const livro= livros.find(v => v.id === id); 
                if (livro) { 
                livro.editora = editora || livro.editora; 
                livro.generos = generos || livro.generos; 
                livro.autor = autor || livro.autor;
                livro.numPags = autor || livro.numPags;
                res.json({ message: 'Informações do livro atualizadas com sucesso.' });
                } else {
                res.status(404).json({ message: 'Livro não encontrado.' }); 
                } 
                });

                app.delete('/livros/:id', (req, res) => { 
                    const { id } = req.params; 
                    const livroIndex = livros.findIndex(v => v.id === id); 
                    if (livroIndex !== -1) { 
                    livros.splice(livroIndex, 1); 
                    res.json({ message: 'Livro excluído com sucesso.' }); 
                    } else { 
                    res.status(404).json({ message: 'Livro não encontrado.' }); 
                    } 
                    });
             
                    const port = 3000; 
                    app.listen(port, () => { 
                    console.log(`Servidor rodando em http://localhost:${port}`); 
                    });
                    
                
            

