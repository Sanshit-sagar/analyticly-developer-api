import express from 'express'
import slugService from '../src/services/slugService'

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(slugService.getNonSensitiveSlugs());
})

router.post('/', (_req, res) => {
    // res.send(slugService.addSlug());
    res.send('Saving a slug')
}); 

router.get('/:id', (_req, res) => {
    
})

export default router; 