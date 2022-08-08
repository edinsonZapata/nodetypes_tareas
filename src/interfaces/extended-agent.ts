export interface ExtendedAgent {
    _id: string,
    disable: boolean,
    subscriptions: string[],
    projects: string[],
    user: string,
    name?: {
        firstName: string,
        lastName: string
    },
    username?: string
}