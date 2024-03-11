import { FeedObserver } from "./feedObserver.js";
import { Feed } from "./feed.js";

export const myFeed = new Feed(0, 'myDSIFeed');
export const firstFeedSubscriptor = new FeedObserver(0, 'firstFeedSubscriptor');
export const secondFeedSubscriptor = new FeedObserver(1, 'secondFeedSubscriptor');
