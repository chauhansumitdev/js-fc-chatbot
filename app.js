const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: '*',
}));

app.post('/chatbot', (req, res) => {
    const userText = req.body.text.toLowerCase();

    const greet = () => {
        return `hi there`;
    }

    const date = () => {
        const curDate = new Date();
        return `The date is ${curDate.toString()}`;
    }
    
    const retry = ()=>{
        return `Prompt does not match, please try again`;
    }

    if (userText.includes('hi')) {
        res.json({ message: greet() });
    } else if (userText.includes('date')) {
        res.json({ message: date() });
    }else{
        res.json({ message: retry() })
    }
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
