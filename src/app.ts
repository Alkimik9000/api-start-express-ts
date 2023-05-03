import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/entity', (req, res) => {
  res.json({
    id: 1001,
    firstName: 'Abe',
    lastName: 'Lincoln',
    age: 25,
    height: 176,
    weight: 84.15
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
