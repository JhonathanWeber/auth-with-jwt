import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export default function getCookies() {
    const cookieStore = cookies()
    const token = cookieStore.get('next-jwt-auth')

    if (!token) {
        redirect('/')
    }

    return console.log('getCookies ok')
}
