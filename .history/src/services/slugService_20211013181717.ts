import slugData from '../../data/slugs'

import { NonSensitiveSlug, Slug } from '../types'

const slugs: Array<Slug> = slugData as Array<Slug>;

const getSlugs = (): Slug[] => {
    return slugs 
}

const getNonSensitiveSlugs = (): NonSensitiveSlug[] => {
    return 
}

const addSlug = () => {
    return null
}

export default {
    getSlugs,
    addSlug
}

