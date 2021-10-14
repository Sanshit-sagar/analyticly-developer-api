

export type AuthMethod = 'simpleHttp' | 'sharedKey' | 'sha256' | undefined; 

export interface Slug {
    id: number; 
    slug: string;
    destination: string;
    password: string | undefined; 
    authMethod: AuthMethod; 
    expiration: number; 
    comment?: string;
};