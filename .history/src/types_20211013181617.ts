

export type AuthMethod = 'simpleHttp' | 'sharedKey' | 'sha256' | null; 

export interface Slug {
    id: number; 
    slug: string;
    destination: string;
    password: string | null; 
    authMethod: AuthMethod; 
    expiration: number | null; 
    comment?: string | null;
};

export type NonSensitiveSlug = Omit<Slug, "comment">; 