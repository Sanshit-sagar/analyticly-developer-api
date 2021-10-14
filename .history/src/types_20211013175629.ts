
type AuthMethod = 'simpleHttp' | 'sharedKey' | 'sha256'

interface Slug {
    slug: string;
    destination: string;
    password: string;
    authMethod: AuthMethod; 
    expiration: number; 
    comment: string;
}