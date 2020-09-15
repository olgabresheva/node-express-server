import { Router } from 'express';
import user from './user';
const router = Router();

router.get('/', user);

export default router;
