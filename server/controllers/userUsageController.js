import catchAsync from '../helpers/catchAsync.js';
import User from '../models/userModel.js';

export const getUserUsage = () => {};

export const sendUserUsage = catchAsync(async (req, res, next) => {
  console.log(req.user);
  // const user = await User.create(req.body);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     user,
  //   },
  // });
});
