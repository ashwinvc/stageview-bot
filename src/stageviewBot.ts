// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import {
  ActivityHandler,
  TurnContext,
  InvokeResponse,
  MessagingExtensionAction,
  CardFactory,
} from "botbuilder";
import { stageviewCard } from "./cards";

export class StageviewBot extends ActivityHandler {
  protected async onInvokeActivity(
    context: TurnContext
  ): Promise<InvokeResponse<any>> {
    console.log("Im here", context.activity.name);
    try {
      if (!context.activity.name) {
        return super.onInvokeActivity(context);
      }
      switch (context.activity.name) {
        case "composeExtension/submitAction":
          return ActivityHandler.createInvokeResponse(
            await this.handleTeamsMessagingExtensionSubmitAction(
              context,
              context.activity.value
            )
          );

        case "adaptiveCard/action": {
          return ActivityHandler.createInvokeResponse(
            await this.handleAdaptiveCardAction(context)
          );
        }
        default:
          return super.onInvokeActivity(context);
      }
    } catch (err) {
      throw err;
    } finally {
      this.defaultNextEvent(context)();
    }
  }

  public async handleTeamsMessagingExtensionSubmitAction(
    context: TurnContext,
    action: MessagingExtensionAction
  ): Promise<any> {
    const card = { ...stageviewCard };
    if (action.data?.isAutoRefreshForAll === true) {
      delete card.refresh.userIds;
    }
    return {
      composeExtension: {
        attachmentLayout: "list",
        attachments: [CardFactory.adaptiveCard(card)],
        type: "result",
      },
    };
  }

  public async handleAdaptiveCardAction(context: TurnContext): Promise<any> {
    const contentType = "application/vnd.microsoft.activity.message";
    const content = "Refresh complete!";
    return {
      statusCode: 200,
      type: contentType,
      value: content,
    };
  }
}
