"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageviewBot = void 0;
const botbuilder_1 = require("botbuilder");
const cards_1 = require("./cards");
class StageviewBot extends botbuilder_1.ActivityHandler {
    onInvokeActivity(context) {
        const _super = Object.create(null, {
            onInvokeActivity: { get: () => super.onInvokeActivity }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Im here", context.activity.name);
            try {
                if (!context.activity.name) {
                    return _super.onInvokeActivity.call(this, context);
                }
                switch (context.activity.name) {
                    case "composeExtension/submitAction":
                        return botbuilder_1.ActivityHandler.createInvokeResponse(yield this.handleTeamsMessagingExtensionSubmitAction(context, context.activity.value));
                    case "adaptiveCard/action": {
                        return botbuilder_1.ActivityHandler.createInvokeResponse(yield this.handleAdaptiveCardAction(context));
                    }
                    default:
                        return _super.onInvokeActivity.call(this, context);
                }
            }
            catch (err) {
                throw err;
            }
            finally {
                this.defaultNextEvent(context)();
            }
        });
    }
    handleTeamsMessagingExtensionSubmitAction(context, action) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const card = Object.assign({}, cards_1.stageviewCard);
            if (((_a = action.data) === null || _a === void 0 ? void 0 : _a.isAutoRefreshForAll) === true) {
                delete card.refresh.userIds;
            }
            return {
                composeExtension: {
                    attachmentLayout: "list",
                    attachments: [botbuilder_1.CardFactory.adaptiveCard(card)],
                    type: "result",
                },
            };
        });
    }
    handleAdaptiveCardAction(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = "application/vnd.microsoft.activity.message";
            const content = "Refresh complete!";
            return {
                statusCode: 200,
                type: contentType,
                value: content,
            };
        });
    }
}
exports.StageviewBot = StageviewBot;
//# sourceMappingURL=stageviewBot.js.map