type URL =  
type Password = 

interface Slug {
    slug: string;
    destination: URL;
    password: string;
    expiration: number; 
    comment: string;
}