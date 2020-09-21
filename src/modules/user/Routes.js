import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateByID from './userUpdateByID';
import userDeleteById from './userDeleteById';
import userDeleteAll from './userDeleteAll';

const router = Router();

router.post('/', userRegister);
router.get('/', userGetAll);
router.get('/:userId', userGetById);
router.patch('/:userId', userUpdateByID);
router.delete('/:userId', userDeleteById);
router.delete('/', userDeleteAll);

export default router;
