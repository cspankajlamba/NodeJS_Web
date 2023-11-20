const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the view engine to use EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// For components directory
app.use('/components', express.static(path.join(__dirname, 'public', 'views', 'components')));  


// Routes using EJS rendering
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/policies', (req, res) => {
  res.render('policies');
});

app.get('/support', (req, res) => {
  res.render('support');
});


app.use((req, res, next) => {
  res.status(404).render('404');
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
