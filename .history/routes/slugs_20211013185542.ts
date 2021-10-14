import express from 'express'
import slugService from '../src/services/slugService'

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(slugService.getNonSensitiveSlugs());
})

router.post('/', (_req, res) => {
    try {

    } catch(e) {

    }
}); 

router.get('/:id', (req, res) => {
    const slug = slugService.findById(Number(req.params.id)); 
    
    if(slug) {
        res.send(slug);
    } else {
        res.sendStatus(404);
    }
})

export default router; 