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

export interface IFundReceivedLog {
    id: string;
    amount: number;
    receivedAt: Date;
    campaignId: string;
    campaign: ICampaign
}

export interface ICampaign {
    id?: string;
    title?: string;
    tagline?: string;
    imageUrl?: string;
    category?: string;
    niche?: string;
    description?: string;
    durationInDays?: number;
    fundGoal?: number;
    fundsReceiver?: string;
    fundsWithdrawn?: boolean;
    fundReceived?: number;
    creatorId?: string;
    createdAt?: Date;
    stripeAccountId?: string
    creator?: IUser;
    fundsReceivedLog?: IFundReceivedLog[];
}
