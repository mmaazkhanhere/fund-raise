export interface IUserState {
    userData: IUser,
    isLoading: boolean,
    error: any
}

export interface ICampaignListState {
    campaignList: ICampaign[];
    isLoading: boolean,
    error: any
}

export interface ICampaignState {
    campaign: ICampaign,
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
    id?: number;
    title?: string;
    tagline?: string;
    imageUrl?: string;
    category?: string;
    niche?: string;
    description?: string;
    durationInDays?: number;
    fundsReceiver?: string;
    fundGoal?: number;
    creatorId?: string;
    createdAt?: Date
    creator?: IUser
}
