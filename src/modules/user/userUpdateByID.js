import User from '../models/user';

export default function userUpdateByID(req, res) {
  const userId = req.params.userId;
  delete req.body.password;
  delete req.body.roles;

  User.updateOne({ _id: userId }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User Update Error');
    });
}