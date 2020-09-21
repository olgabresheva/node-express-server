import User from '../models/user';

export default function userDeleteById(req, res) {
  const userId = req.params.userId;
  User.deleteOne({ _id: userId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: 'User Delete Error',
      });
    });
}
