import express from 'express'
import toNewSlug from '../utils'
import slugService from '../src/services/slugService'

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(slugService.getNonSensitiveSlugs());
})

router.post('/', (_req, res) => {
    try {
        const newSlug = toNewSlug(req.body);
        
        const addedSlug = slugService.addSlug(newSlug); 
        res.json()
    } catch(e) {
        res.status(400).send(e.message);
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