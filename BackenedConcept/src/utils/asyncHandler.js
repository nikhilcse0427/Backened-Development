import mongoose from 'mongoose'
import {Database_Name} from '../constants.js'

const asyncHandler = (fn) => {
  return async (req, res, next) => {
      try {
          await fn(req, res, next);
      } catch (error) {
          res.status(error.code || 500).json({
              success: false,
              message: error.message
          });
      }
  };
};

export default asyncHandler


// This is what asyncHandler does behind the scenes
