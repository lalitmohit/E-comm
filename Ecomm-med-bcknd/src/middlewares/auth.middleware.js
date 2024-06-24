import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request - Token not COreeeeecctt");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(401, "Unauthorized request - Invalid token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "Unauthorized request - Invalid token");
  }
});

export const logoutUserPerma = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "Unauthorized request - Token not COreeeeecctt");
    }

    const decodedToken = jwt.verify(token, process.env.REFRRESH_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    // console.log("User:", user);
    if (!user) {
      throw new ApiError(401, "Unauthorized request - Invalid token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "Unauthorized request - Invalid token");
  }
});

export const isUserAdmin = asyncHandler(async (req, res, next) => {
  try {
    if (req.user?.role !== "admin") {
      throw new ApiError(403, "Unauthorized request - Admin only");
    }
    next();
  } catch (error) {
    throw new ApiError(403, "Unauthorized request - Admin only");
  }
});
