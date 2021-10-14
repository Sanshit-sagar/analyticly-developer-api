import express from 'express'
import slugService from '../src/services/slugService'

const slugRouter = express.Router();

router.get(('/') => (_req, res) => {
    res.send(slugService.getNonSensitiveSlugs())
})
