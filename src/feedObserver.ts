import { FeedEventType } from "./eventType";
import { Observable } from "./observable";
import { Observer } from "./observer";
import { Feed } from "./feed";

/**
 * Class FeedObserver that implements the interface Observer
 * it is able to observe other objects like Feed
 */
export class FeedObserver implements Observer {
  constructor(private id: number, private name: string) {
  }

  getId() {
    return this.id;
  }
  
  getName() {
    return this.name;
  }

  update(observable: Observable) {
    if (observable instanceof Feed) {
      switch(observable.getEventType()) {
        case FeedEventType.RELEASE:
          console.log(`I am a new Feed called ${this.name} ` +
                      `and I have observed that Feed ${observable.getName()} ` +
                      `was release new information`);
          break;
      }
    }
  }
}