import CredentialsProvider from 'next-auth/providers/credentials';

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: any) {
            // database logic and input validation using zod here
                return {
                    id: "user1"
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin",
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }: any) {

            return true;
        }
    }
}