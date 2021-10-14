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

const parsePassword = (password: unknown): string => {
    if(!password || !isString(password) || !isPassword(password)) {
        throw new Error(`Incorrect or missing password ${password}`)
    }
    return password
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewSlug = (object: any): NewSlug => {
    const newSlug: NewSlug = {
        slug: parseSlug(object.slug),
        destination: parseUrl(object.destination),
        password: parsePassword(object.password),
        expiration: parseDate(object.expiration),
        comment: parseComment(object.comment)
    };
    return newSlug; 
}

export default toNewSlug