import { v4 as uuid } from 'uuid'

type SignInRequestType = {
    email: string;
    password: string;
}

const delay = (amount = 5000) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestType) {
    await delay()

    return {
        token: uuid(),
        user: {
            name: 'Jhonathan Weber',
            email: 'jhonmw@gmail.com',
            avatar_url: 'https://github.com/JhonathanWeber.png'
        }
    }

}

export async function recoverUserInformation() {
    await delay()
    return {
        user: {
            name: 'Jhonathan Weber',
            email: 'jhonmw@gmail.com',
            avatar_url: 'https://github.com/JhonathanWeber.png'
        }
    }
}