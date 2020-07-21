const express = require('express');
const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../../modules/mailer');

const authConfig = require('../../config/auth');

const User = require('../models/user');

const router = express.Router();

function genereteToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

router.post('/register', async (req, res) => {
    const {email} = req.body;
    try {
        if(await User.findOne({email}))
            return res.status(400).send({error: 'User already exists'});

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ 
            user,
            token: genereteToken({id: user.id}),
        });
    }catch(err) {
        return res.status(400).send({error: 'Registration failed'});
    }
});

router.post('/authenticate', async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user){
        return res.status(400).send({ error: 'User not found'});
    }

    if(!await bcript.compare(password, user.password)){
        return res.status(400).send({error: 'Invalid password'});
    }

    user.password = undefined;

    res.send({
        user, 
        token: genereteToken({id: user.id}),
    });

});

router.put('/update/:id', async (req, res) => {
    const {name, email} = req.body;

    try {
        await User.findByIdAndUpdate({'_id': req.params.id}, {
            '$set': {
                name: name,
                email: email
            }
        }, {new: true}).then(response => {
            return res.status(200).json(response);
        })

    }catch(err) {
        return res.status(400).send({error: 'Update failed'});
    }
});

router.post('/forgot_password', async (req, res) =>{
    const {email} = req.body;

    try {
        
        const user = await User.findOne({email});

        if(!user)
            return res.status(400).send({ error: 'User not found'});

        const token = crypto.randomBytes(4).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now
            }
        });

        mailer.sendMail({
            to: email,
            from: 'marcospaulo.mpf34@gmail.com',
            template: 'auth/forgot_password',
            context: {token}
        }, (err) => {
            if(err)
                return res.status(400).send({ error: 'Cannot send forgot password email'});

            return res.send();
        })

    } catch (err) {
        res.status(400).send({ error: 'Erro on forgot password. try again'})
    }
});

router.post('/reset_password', async (req, res) => {
    const {email, token, password} = req.body;

    try {
        const user = await User.findOne({email})
            .select('+passwordResetToken passwordResetExpires');
        
        if(!user)
            return res.status(400).send({ error: 'User not found'});

        if(token !== user.passwordResetToken)
            return res.status(400).send({ error: 'token invalid'});

        const now = new Date();

        if(now > user.passwordResetExpires)
            return res.status(400).send({error: 'Token expire, generete new one'})

        user.password = password;
        
        await user.save();

        res.send();

    } catch (err) {
        res.status(400).send({ error: 'Cannot reset password, try again'})

    }
});

router.post('/change_password/:id', async (req, res) => {
    const {currentPassword, newPassword} = req.body;

    try {
        const user = await User.findOne({'_id': req.params.id}).select('+password');

        if(! await bcript.compare(currentPassword, user.password)){
            return res.status(400).send({error: 'Current password invalid'});
        }

        user.password = newPassword;

        await user.save();

        res.send();

    } catch (err) {
        res.status(400).send({ error: 'Cannot change password, try again'})

    }
    
})

module.exports = app => app.use('/auth', router);