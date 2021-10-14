import { NewSlug } from './types'

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String; 
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date)); 
}

const parseComment = (comment: unknown): string => {
    if(!comment || !isString(comment)) {
        throw new Error(`Incorrect or missing comment`); 
    }
    return comment;
}

const parseDate = (date: unknown): string => {
    if(!date || !isString(date) || !isDate(date)) {
        throw new Error(`Incorrect or missing date ${date}`);
    }
    return date; 
}


const toNewSlug = ({ slug, expiration, password, comment }: Fields): NewSlug => {
    const newSlug: NewSlug = {
        slug: parseSlug(slug)
        destination: parseDestination(destination)
        password: parsePassword(password)
        expiration: parseDate(expiration)
        comment: parseComment(comment)
        // password: 
    }
    return newSlug; 
}

export default toNewSlug