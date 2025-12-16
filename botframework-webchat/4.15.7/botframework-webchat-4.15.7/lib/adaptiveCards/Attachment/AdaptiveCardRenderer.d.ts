import { AdaptiveCard } from 'adaptivecards';
import { VFC } from 'react';
import type { DirectLineCardAction } from 'botframework-webchat-core';
declare type AdaptiveCardRendererProps = {
    actionPerformedClassName?: string;
    adaptiveCard: AdaptiveCard;
    disabled?: boolean;
    tapAction?: DirectLineCardAction;
};
declare const AdaptiveCardRenderer: VFC<AdaptiveCardRendererProps>;
export default AdaptiveCardRenderer;
//# sourceMappingURL=AdaptiveCardRenderer.d.ts.map