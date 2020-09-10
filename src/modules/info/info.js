export default function info(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  let result;
  if (req.body.operation === 'plus') {
    result = a + b;
  }
  if (req.body.operation === 'multiply') {
    result = a * b;
  }
  if (req.body.operation === 'divide') {
    result = a / b;
  }
  res.send('Info ' + result);
}
