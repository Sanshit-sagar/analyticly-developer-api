import { NewSlug } from './types'

const isString = (text: unknown): boolean => {
    return typeof text === 'string' || text instanceof String; 
}

const parseComment = (comment: unknown): string => {
    if(!comment || !isString(comment)) {
        throw new Error(`Incorrect or missing comment`)
    }
}


const toNewSlug = (object: unknown): NewSlug => {
    const newSlug: NewSlug = {
        
    }
    return newSlug; 
}

export default toNewSlug