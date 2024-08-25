import jwt from 'jsonwebtoken'
import {User} from '../models/user.models.js'
import {ApiError} from '../utils/apiError.js'
import {asyncHandler} from '../utils/asyncHandler.js'


export const verifyJWT =asyncHandler(async(req, _, next) => {
    const token = req.cookies.accessToken || req.header
})