export declare const stageviewCard: {
    type: string;
    body: {
        text: string;
        wrap: boolean;
        type: string;
    }[];
    actions: ({
        data: {
            msteams: {
                type: string;
                value: {
                    type: string;
                    tabInfo: {
                        websiteUrl: string;
                        contentUrl: string;
                        name: string;
                        entityId: string;
                    };
                };
            };
        };
        title: string;
        type: string;
        url?: undefined;
    } | {
        url: string;
        title: string;
        type: string;
        data?: undefined;
    })[];
    version: string;
    refresh: {
        userIds: any[];
        action: {
            verb: string;
            title: string;
            type: string;
        };
    };
};
