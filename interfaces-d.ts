export interface IUserState {
    userData: IUser,
    isLoading: boolean,
    error: any
}

export interface IUser {
    id?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    profileImageUrl?: string;
    fullName?: string;
    campaigns?: ICampaign[];
}

export interface ICampaign {

}