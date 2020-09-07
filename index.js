const express = require('express');
const app = express();

const courses = [
    { id: 1, name: 'Course 1'},
    { id: 2, name: 'Course 2'},
    { id: 3, name: 'Course 3'}
]

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/courses', (req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.')
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: cousrses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to port ${port}...`));