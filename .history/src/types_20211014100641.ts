

export type AuthMethod = 'simpleHttp' | 'sharedKey' | 'sha256' | null; 

export interface Slug {
    id: number; 
    slug: string;
    destination: string;
    password: string | null; 
    expiration: string | null; 
    comment: string | null;
};

export type NonSensitiveSlug = Omit<Slug, "comment">; 

export type NewSlug = Omit<Slug, "id">;