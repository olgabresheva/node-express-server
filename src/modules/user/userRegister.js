import User from '../models/user';

export default function userRegister(req, res) {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });
  newUser
    .save()
    .then((user) => {
      res.status(201).json({
        message: 'User Created',
        userDetails: user,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'User Not registered',
        error: err,
      });
    })
    .finally(() => {});
}
