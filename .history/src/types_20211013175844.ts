
type SlugCategory = 'mortalSlug' | 'immortalSlug' | 'immortalSlugWithPassword' | 'slug'
type AuthMethod = 'simpleHttp' | 'sharedKey' | 'sha256' | undefined; 

interface Slug {
    slug: string;
    destination: string;
    password: string;
    authMethod: AuthMethod; 
    expiration: number; 
    comment: string;
}