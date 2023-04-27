import Post from "./Post.js";
import bcrypt from "bcryptjs";
import {check,validationResult} from "express-validator";
import Validation_Rules from "./Validator.js";
import post from "./Post.js";


class PostController{
    async createSportsmen(req, res){
        try {

            const {email, password, name, birthday, passportData, region, phone, tg, infoAboutUser} = req.body

            await Validation_Rules()

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
               res.status(400).json({message:"Произошла ошибка при регистрации"})
            }

            const unMail = await Post.findOne({email})
            if (unMail){
              return res.status(400).json({message:"Пользователь с указанным email уже зарегистрирован"})

             }
            const hashPassword = await bcrypt.hash(password, 15)
            const post = await  Post.create({email,password:hashPassword,name,birthday, passportData,region,phone,tg,infoAboutUser})
            return res.json(post)



        }catch (e){
            res.status(500).json(e)
        }
    }


    async getAll(req,res){
        try {
            const posts = await Post.find()
            return res.json(posts)
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getOne(req,res){
        try {
            const {id} = req.params
            if(!id){
                res.status(400).json({message:'ID не найден в базе данных сервера'})
            }
            const post = await Post.findById(id)
            return res.json(post)
        }catch (e){
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try {
            const post = res.body

             if(!post._id){
                res.status(400).json({message:'ID не найден в базе данных сервера'})
             }
            const updatedPost = await Post.findByIdAndUpdate(post._id);
            return res.json(updatedPost);
        }catch (e){
            res.status(500).json(e)
        }
    }
    async delete(req,res){
        try {
            const {id} =req.params
            const post = Post.findByIdAndDelete(id)
            res.json(post)

        }catch (e){
            res.status(500).json(e)
        }
    }
}

export default new PostController()