import slugData from '../../data/slugs.json'

import { Slug } from '../types'

const slugs: Array<Slug> = slugData

const getSlugs = () => {
    return slugData 
}

const addSlug = () => {
    return null
}

export default {
    getSlugs,
    addSlug
}

