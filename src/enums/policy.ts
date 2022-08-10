export enum ACCESS_POLICY{
    AGENT="AGENT",
    ADMIN="ADMIN",
    ALL="ALL"
}

export interface Policy{
    access: ACCESS_POLICY
}