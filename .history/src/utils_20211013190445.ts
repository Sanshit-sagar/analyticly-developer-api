import { NewSlug } from './types'

const isString = (text: unknown): boolean => {
    return typeof text === 'string' 
}


const toNewSlug = (object: unknown): NewSlug => {
    const newSlug: NewSlug = {
        
    }
    return newSlug; 
}

export default toNewSlug