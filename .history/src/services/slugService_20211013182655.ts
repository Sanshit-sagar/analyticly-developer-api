import slugData from '../../data/slugs'

import { NonSensitiveSlug, Slug } from '../types'

const slugs: Array<Slug> = slugData as Array<Slug>;

const getSlugs = (): Slug[] => {
    return slugs 
}

const getNonSensitiveSlugs = (): NonSensitiveSlug[] => {
    return slugs.map(({ id, slug, destination, authMethod, password, expiration }) => ({
        id,
        slug,
        destination,
        authMethod,
        password,
        expiration
    }));  
}; 

const addSlug = () => {
    return []
}

const findById = (id: )

export default {
    getSlugs,
    addSlug,
    getNonSensitiveSlugs
}

