import User from '../models/user';

export default function userGetAll(req, res) {
  User.find()
    .limit(2)
    .skip(2)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User get All error');
    });
}
