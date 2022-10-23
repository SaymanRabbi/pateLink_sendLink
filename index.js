const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.post('/paste-text',(req,res)=>{
    const URL_REGEX =
	/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
    const text = req.body.text;
    let textarr;
    const words = text.split(' ');
    words.map(word=> {
        if(word.match(URL_REGEX)){
            textarr = text.replace(word,`<a href="${word}"></a>`);
        }
        else{
            textarr = text;
        }
    })
    res.send(textarr);
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})