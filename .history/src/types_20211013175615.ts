
type AuthMethod = 'simpleHttp' | 
interface Slug {
    slug: string;
    destination: string;
    password: string;
    authMethod: AuthMethod; 
    expiration: number; 
    comment: string;
}