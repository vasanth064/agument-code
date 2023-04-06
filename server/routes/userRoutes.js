import express from 'express';
import {
  getMe,
  signin,
  signup,
  getUser,
  deleteUser,
  getUsers,
  protectedRoute,
  restrictTo,
  forgetPassword,
  resetPassword,
  updatePassword,
  updateCurrentUser,
  deleteCurrentUser,
  signout,
  profileUpload,
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/signup', profileUpload.single('photo'), signup);
userRouter.post('/signin', signin);
userRouter.get('/signout', signout);
userRouter.get('/me', protectedRoute, getMe);

userRouter.patch('/updatePassword', protectedRoute, updatePassword);
userRouter.post('/forgetPassword', forgetPassword);
userRouter.patch('/resetPassword/:token', resetPassword);

userRouter.patch(
  '/update',
  protectedRoute,
  profileUpload.single('photo'),
  updateCurrentUser
);
userRouter.delete('/delete', protectedRoute, deleteCurrentUser);

userRouter.route('/').get(protectedRoute, restrictTo('admin'), getUsers);
userRouter
  .route('/')
  .post(protectedRoute, restrictTo('admin'), getUser)
  .delete(protectedRoute, restrictTo('admin'), deleteUser);

export default userRouter;
