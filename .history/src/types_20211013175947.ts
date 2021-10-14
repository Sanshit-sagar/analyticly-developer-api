

type AuthMethod = 'simpleHttp' | 'sharedKey' | 'sha256' | undefined; 

interface Slug {
    id: string; 
    slug: string;
    destination: string;
    password: string;
    authMethod: AuthMethod; 
    expiration: number; 
    comment: string;
}