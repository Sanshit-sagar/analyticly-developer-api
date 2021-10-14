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

const addSlug = (newSlug: NewSlug):  => {
    return []
}

const findById = (id: number): Slug | undefined => {
    const slug = slugs.find((s) => s.id === id);
    return slug; 
}

export default {
    getSlugs,
    addSlug,
    getNonSensitiveSlugs,
    findById
}

