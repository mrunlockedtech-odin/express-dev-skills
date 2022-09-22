import { Router } from 'express'
import { skills } from '../data/skills-data.js'

const router = router()

app.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})