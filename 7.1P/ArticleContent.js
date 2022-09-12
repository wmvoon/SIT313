import {faker} from "@faker-js/faker"

const ArticleContent = [
    {
        title: faker.company.name(),
        avatar: faker.image.technics(500, 600, true),
        description: faker.commerce.productAdjective(),
        name: faker.name.firstName() +" "+ faker.name.lastName()
    },
    {
        title: faker.company.name(),
        avatar: faker.image.technics(500, 600, true),
        description: faker.commerce.productAdjective(),
        name: faker.name.firstName() +" "+ faker.name.lastName()
    },
    {
        title: faker.company.name(),
        avatar: faker.image.technics(500, 600, true),
        description: faker.commerce.productAdjective(),
        name: faker.name.firstName() +" "+ faker.name.lastName()
    }
]


export default ArticleContent;