import { FeedObserver } from "./feedObserver";
import { Feed } from "./feed";

export const myFeed = new Feed(0, 'myDSIFeed');
export const firstFeedSubscriptor = new FeedObserver(0, 'firstFeedSubscriptor');
export const secondFeedSubscriptor = new FeedObserver(1, 'secondFeedSubscriptor');

// console.log('firstFeedSubscriptor subscription');
// myFeed.subscribe(firstFeedSubscriptor);

// console.log('secondFeedSubscriptor subscription');
// myFeed.subscribe(secondFeedSubscriptor);

// try {
//   myFeed.subscribe(secondFeedSubscriptor);
// } catch (error) {
//   console.log('secondFeedSubscriptor was already subscribed');
// }

// console.log('firstFeedSubscriptor unsubscription');
// myFeed.unsubscribe(firstFeedSubscriptor);

// console.log('myFeed release');
// myFeed.onRelease(); 
