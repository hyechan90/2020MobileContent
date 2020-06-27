const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const User = require('./models/User')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/login', async (req, res) => {
	const body = req.body
	try {
		const userCheck = await User.findOne({
			email: body.email,
			password: body.password,
		})
		if (userCheck) {
			res.send('로그인 성공!')
		} else {
			res.status(401).send('로그인 실패...')
		}
	} catch (e) {
		res.sendStatus(500)
	}
})

app.post('/register', async (req, res) => {
	try {
		const body = req.body
		if (body.password !== body.passwordConfirm) {
			res.status(401).send('비밀번호가 같지 않습니다.')
			return
		}
		const emailCheck = await User.find({ email: body.email })
		if (emailCheck.length) {
			res.status(401).send('이미 회원가입한 계정입니다.')
			return
		}
		const user = await User.create(body)
		res.send(user)
	} catch (e) {
		console.log(e)
		res.sendStatus(500)
	}
})

mongoose.connect(
	'mongodb://localhost:27017/mocon',
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('connected to DB')
	}
)

app.listen(8080, () => {
	console.log('Server Running...')
})