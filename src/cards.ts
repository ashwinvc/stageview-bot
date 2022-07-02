export const stageviewCard = {
  type: "AdaptiveCard",
  body: [
    {
      text: "Stage View Card",
      wrap: true,
      type: "TextBlock",
    },
  ],
  actions: [
    {
      data: {
        msteams: {
          type: "invoke",
          value: {
            type: "tab/tabInfoAction",
            tabInfo: {
              websiteUrl: "https://www.developerway.com",
              contentUrl:
                "https://www.developerway.com/posts/why-custom-react-hooks-could-destroy-your-app-performance",
              name: "Stage view",
              entityId: "stageViewTask",
            },
          },
        },
      },
      title: "View via card",
      type: "Action.Submit",
    },
    {
      url: "https://teams.microsoft.com/l/stage/4eb2566e-8bae-454a-ab5d-a52728617f6e/0?context=%7B%22contentUrl%22%3A%22https%3A%2F%2Fkhairold.com%2Fmaking-setinterval-declarative-with-react-hooks%22%2C%22websiteUrl%22%3A%22https%3A%2F%2Fkhairold.com%2Fmaking-setinterval-declarative-with-react-hooks%22%2C%22name%22%3A%22DeepLinkStageView%22%7D",
      title: "View via Deep Link",
      type: "Action.OpenUrl",
    },
  ],
  version: "1.2",
  refresh: {
    userIds: [],
    action: {
      verb: "stageviewrefresh",
      title: "refresh",
      type: "Action.Execute",
    },
  },
};
