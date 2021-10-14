import { NewSlug } from './types'

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String; 
}

const isDate = (date: unknown): date is Date => {
    return Boolean(Date.parse(date)); 
}

const parseComment = (comment: unknown): string => {
    if(!comment || !isString(comment)) {
        throw new Error(`Incorrect or missing comment`); 
    }
    return comment;
}


const toNewSlug = (object: unknown): NewSlug => {
    const newSlug: NewSlug = {
        
    }
    return newSlug; 
}

export default toNewSlug