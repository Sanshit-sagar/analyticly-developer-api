import { NewSlug } from './types'

type Fields = {
    slug: unknown;
    destination: unknown;
    expiration: unknown;
    password: unknown;
    comment: unknown; 
};

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

const parseUrl = (url: unknown): string => {
    if(!url || !isString(url) || !isUrl(url)) {
        throw new Error(`Incorrect or missing url ${url}`)
    }
    return url;
}

const parseSlug = (slug: unknown): string => {
    if(!slug || !isString(slug) || !isSlug(slug)) {
        throw new Error(`Incorrect or missing slug ${slug}`)
    }
    return slug
}

const toNewSlug = ({ slug, destination, expiration, password, comment }: Fields): NewSlug => {
    const newSlug: NewSlug = {
        slug: parseSlug('slug', slug),
        destination: parseUrl(destination),
        password: parsePassword('password', password),
        expiration: parseDate(expiration),
        comment: parseComment(comment)
    }
    return newSlug; 
}

export default toNewSlug