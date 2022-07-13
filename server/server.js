// All imports
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs')
require('dotenv/config')

// initialize express app
const app = express()
app.use(cors())

// Multer Storage
const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname)
  },
})
const uploads = multer({ storage: storage })

// Models
const FreelancerModel = require('./models/Freelancer')
const CompanyModel = require('./models/Company')
const TaskModel = require('./models/Task')

// Route Setup
app.get('/', (req, res) => {
  res.json(req.body)
})

// General Login
app.get('/login', (req, res) => {

  // create two queries, freelancer or company
  const typeOfUser = req.query.type
  // if freelancer, check if email and password match
  if (typeOfUser === 'company') {
    CompanyModel.findOne({ email: req.query.email })
      .then(company => {
        if (company) {
          if (company.password === req.query.password) {
            res.send(company)
          } else {
            res.send('Incorrect password')
          }
        } else {
          res.send('Incorrect email')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  // if company, check if email and password match
  else if (typeOfUser === 'freelancer') {
    FreelancerModel.findOne({ email: req.query.email })
      .then(freelancer => {
        if (freelancer) {
          if (freelancer.password === req.query.password) {
            res.send(freelancer)
          } else {
            res.send('Incorrect password')
          }
        } else {
          res.send('Incorrect email')
        }
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    res.send('error')
  }
})

// ! TASKS
app.post('/task', upload.any(), (req, res) => {
  const saveTask = TaskModel({
    name: req.body.name,
    description: req.body.description,
    links: req.body.links,
    contact: req.body.contact,
    pay: req.body.pay,
    companyId: req.body.companyId,
    companyName: req.body.companyName,
    freelancerId: req.body.freelancerId,
    dueDate: req.body.dueDate,
    status: req.body.status,
  })
  saveTask
    .save()
    .then(() => {
      res.send('success')
    })
    .catch(err => {
      res.json({ message: err })
    })
})

// ! COMPANY
app.post('/company', upload.any(), async (req, res) => {
  const imgObj1 = {
    img: {
      data: fs.readFileSync('uploads/' + req.files[0].filename),
      contentType: req.files[0].mimetype,
    },
  }
  const imgObj2 = {
    img: {
      data: fs.readFileSync('uploads/' + req.files[1].filename),
      contentType: req.files[1].mimetype,
    },
  }

  const saveCompany = await CompanyModel({
    type: req.body.type,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    gradient: req.body.gradient,
    banner: imgObj1.img,
    logo: imgObj2.img,
  })

  await saveCompany
    .save()
    .then(() => {
      res.send('success')
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
})

// ! FREELANCER
app.post('/freelancer', upload.any(), (req, res) => {
  const imgObj = {
    img: {
      data: fs.readFileSync('uploads/' + req.files[0].filename),
      contentType: req.files[0].mimetype,
    },
  }

  const saveFreelancer = FreelancerModel({
    type: req.body.type,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    pfp: imgObj.img,
    gradient: req.body.gradient,
    cash: req.body.cash,
  })

  saveFreelancer
    .save()
    .then(() => {
      res.send('success')
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
})

// Database Connection
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${[process.env.DB_PASS]}@${
    process.env.DB_CLUSTER
  }.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log('Connected to DB!')
  }
)

// Start Server Listening
PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}..`)
})
