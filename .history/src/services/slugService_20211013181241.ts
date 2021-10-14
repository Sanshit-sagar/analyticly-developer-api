import slugData from '../../data/slugs'

import { Slug } from '../types'

const slugs: Array<Slug> = slugData as Array<Slug>;

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

