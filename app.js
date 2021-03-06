const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const AI = require('./main')
const User = require('./models/User')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('Server Running...')
})

app.post('/login', async (req, res) => {
	console.log('login')
	const body = req.body
	try {
		const userCheck = await User.findOne({
			email: body.email,
			password: body.password,
		})
		if (userCheck) {
			console.log(userCheck)
			res.send('로그인 성공!')
		} else {
			res.status(401).send('로그인 실패...')
		}
	} catch (e) {
		res.sendStatus(500)
	}
})

app.post('/register', async (req, res) => {
	console.log('register')
	try {
		const body = req.body
		if (body.password !== body.passwordConfirm) {
			res.status(401).send('비밀번호가 같지 않습니다.')
			return
		}
		const emailCheck = await User.findOne({ email: body.email })
		console.log(emailCheck)
		if (emailCheck) {
			res.status(401).send('이미 회원가입한 계정입니다.')
			return
		}
		console.log('emailCheck done')
		console.log(body)
		const user = await User.create(body)
		console.log(user)
		res.send(user)
	} catch (e) {
		console.log(e)
		res.sendStatus(500)
	}
})

app.post('/list', async (req, res) => {
	try {
		const body = req.body
		console.log(body.email)
		console.log(body)

		const user = await User.findOne({ email: body.email })

		console.log(AI(JSON.parse(body.list), user.mbti))
		res.send(AI(JSON.parse(body.list), user.mbti))
	} catch (e) {
		console.error(e)
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
