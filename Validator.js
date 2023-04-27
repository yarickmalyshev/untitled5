import {check,validationResult} from "express-validator";
//email, password, name, birthday, passportData, region, phone, tg, infoAboutUser
async function Validation_Rules(){
    return [
        check('email','email is incorrect').isEmail(),
        check('email').not().isEmpty().withMessage('Введите email'),
        check('password','password must be longer, than 7 and shorter, than 12').isLength({min:8,max:13}),
        check('password').not().isEmpty().withMessage('Введите пароль'),
        //check('first_name').not().isEmpty().withMessage('First name is required'
        check('name').not().isEmpty().withMessage('поле "ФИО" обязательно для заполнения'),
        check('birthday').not().isEmpty().withMessage('поле "Дата рождения" обязательно для заполнения'),
        check('birthday').toDate().optional({ checkFalsy: true }),
        check('passportData').not().isEmpty().withMessage('поле "Паспортные данные" обязательно для заполнения'),
        check('region').not().isEmpty().withMessage('поле "Ваш регион" обязательно для заполнения'),
        check('phone').not().isEmpty().withMessage('поле "Номер телефона" обязательно для заполнения'),
        check('tg').not().isEmpty().withMessage('Укажите ссылку на свой телеграмм')
    ]
}

export default Validation_Rules