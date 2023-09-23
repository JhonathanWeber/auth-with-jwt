'use client'
import { createContext, useEffect, useState } from "react";
import nookies from 'nookies'
import { useRouter } from "next/navigation";

import { recoverUserInformation, signInRequest } from "@/services/authSimulation";
import { api } from "@/services/api";

console.log('fabiana')

type SignInType = {
    email: string;
    password: string;
}


type UserType = {
    name: string;
    email: string;
    avatar_url: string;
}

type AuthContextType = {
    user: UserType;
    isAuthenticated: boolean;
    signIn: (data: SignInType) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)


export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<UserType>({ name: '', email: '', avatar_url: '' })
    const router = useRouter();
    const cookies = nookies.get()

    const isAuthenticated = !!user;



    useEffect(() => {
        const { 'next-jwt-auth': token } = cookies

        if (token) {
            recoverUserInformation().then(response => setUser(response.user))
        }

    }, [])

    async function signIn({ email, password }: SignInType) {
        const { token, user } = await signInRequest({
            email,
            password,
        })

        setUser(user)


        nookies.set(undefined, 'next-jwt-auth', token, {
            maxAge: 60 * 60 * 24, // 24h,
            path: '/'
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`

        router.push('/dashbord')


    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>

    )
}

