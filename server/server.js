const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
require('dotenv/config')

const delAllFiles = () => {
  const directory = './uploads'
  fs.readdir(directory, (err, files) => {
    if (err) throw err

    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err
      })
    }
  })
}

const FreelancerModel = require('./models/Freelancer')
const CompanyModel = require('./models/Company')
const TaskModel = require('./models/Task')

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

const app = express()

app.use(cors())

// const companyRoute = require('./routes/Company')
// app.use('/company', companyRoute)

// const taskRoute = require('./routes/Task')
// app.use('/task', taskRoute)

app.get('/', (req, res) => {
  res.json(req.body)
})

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
      res.json({ message: 'Task saved' })
    })
    .catch(err => {
      res.json({ message: err })
    })
})

app.post('/company', upload.any(), (req, res) => {
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

  const saveCompany = CompanyModel({
    type: req.body.type,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    gradient: req.body.gradient,
    banner: imgObj1,
    logo: imgObj2,
  })

  saveCompany
    .save()
    .then(() => {
      res.send('Freelancer saved')
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })

  delAllFiles()
  return res.status(200).json
})

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
      res.send('Freelancer saved')
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })

  delAllFiles()
  return res.status(200).json
})

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${[process.env.DB_PASS]}@${
    process.env.DB_CLUSTER
  }.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log('Connected to DB!')
  }
)

PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}..`)
})
