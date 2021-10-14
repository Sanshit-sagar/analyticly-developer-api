import { NewSlug, Slug } from '../src/types'
import { toNewSlug } from '../src/utils'

const data: unknown[] = [
    {
        "id": 1,
        "slug": "slug_one",
        "destination": "https://www.sanshitsagar.com",
        "password": null, 
        "expiration": null,
        "comment": "first slug! woo!!"
    },
    {
        "id": 2,
        "slug": "slug_two",
        "destination": "https://www.linkedin.com/in/sanshit-sagar",
        "password": null, 
        "expiration": null,
        "comment": "",
    },
    {
        "id": 3,
        "slug": "slug_three",
        "destination": "https://www.github.com/sanshit-sagar",
        "password": null, 
        "expiration": null,
        "comment": "",
    }
]

const getSlugs: Array<Slug> = () => {
    const slug: NewSlug = toNewSlug(data)
}

export default slugs