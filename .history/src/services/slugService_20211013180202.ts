import slugData from '../../data/slugs.json'

import { Slug } from '../types'

const slugs: Array<Slug> = slugData

const getSlugs = (): Array<Slug> => {
    return slugs 
}

const addSlug = () => {
    return null
}

export default {
    getSlugs,
    addSlug
}

