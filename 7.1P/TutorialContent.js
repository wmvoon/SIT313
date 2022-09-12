import {faker} from "@faker-js/faker"

const TutorialContent = [
    {
        title: faker.name.jobType(),
        avatar: faker.image.business(500, 600, true),
        description: faker.name.jobArea(),
        name: faker.name.firstName() +" "+ faker.name.lastName()
    },
    {
        title: faker.name.jobType(),
        avatar: faker.image.business(500, 600, true),
        description: faker.name.jobArea(),
        name: faker.name.firstName() +" "+ faker.name.lastName()
    },
    {
        title: faker.name.jobType(),
        avatar: faker.image.business(500, 600, true),
        description: faker.name.jobArea(),
        name: faker.name.firstName() +" "+ faker.name.lastName()
    }
]


export default TutorialContent;