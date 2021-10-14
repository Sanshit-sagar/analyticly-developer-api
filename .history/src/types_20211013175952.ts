

type AuthMethod = 'simpleHttp' | 'sharedKey' | 'sha256' | undefined; 

interface Slug {
    id: number; 
    slug: string;
    destination: string;
    password: string;
    authMethod: AuthMethod; 
    expiration: number; 
    comment: string;
}