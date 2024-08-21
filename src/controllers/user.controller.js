import {asyncHandler } from '../utils/asyncHandler.js'
import {ApiError} from '../utils/apiError.js'
import {User} from '../models/user.models.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'

const registerUser = asyncHandler(async(req, res) => {
    const {fullname, email, username, password} = req.body

    // validation
    if([fullname, email, username, password].some(field => field?.trim() === '')){
        throw new ApiError(400, 'All fields are required')
    }

    const existUser = await User.findOne({$or: [{username},{email}]})
    if(existUser){
        throw new ApiError(409, 'User with email or username already exists')
    }

    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverLocalPath = req.files?.coverImage[0]?.path

    if(!avatarLocalPath){
        throw new ApiError(400, 'Avatar file is missing')
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    let coverImage = ''
    if(coverLocalPath){
        coverImage = await uploadOnCloudinary(coverImage)
    }

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || '',
        email,
        password,
        username: username.toLowerCase()
    })
   

})


export {
    registerUser
}