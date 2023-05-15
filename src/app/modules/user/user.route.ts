import express from 'express';
import { createUser, getAdminUsers, getUserById, getUsers } from './user.controller';
import { getUsersFromDB } from './user.service';
const router = express.Router()

router.get("/", getUsers)
router.get("/admins", getAdminUsers)
router.get('/:id', getUserById)
router.post('/create-user', createUser)

export default router;