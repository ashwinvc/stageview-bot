import { ActivityHandler, TurnContext, InvokeResponse, MessagingExtensionAction } from "botbuilder";
export declare class TeamsMessagingExtensionsSearchBot extends ActivityHandler {
    protected onInvokeActivity(context: TurnContext): Promise<InvokeResponse<any>>;
    handleTeamsMessagingExtensionSubmitAction(context: TurnContext, action: MessagingExtensionAction): Promise<any>;
    handleAdaptiveCardAction(context: TurnContext): Promise<any>;
}
