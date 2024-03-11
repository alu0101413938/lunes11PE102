import { FeedEventType } from "./eventType.js";
import { Observable } from "./observable.js";
import { Observer } from "./observer.js";
import { Feed } from "./feed.js";

/**
 * Class FeedObserver that implements the interface Observer
 * it is able to observe other objects like Feed
 */
export class FeedObserver implements Observer {
  constructor(private id: number, private name: string) {
  }

  /**
   * @returns Devuelve el id
   */
  getId() {
    return this.id;
  }
  
  /**
   * @returns Devuelve el nombre
   */
  getName() {
    return this.name;
  }

  /**
   * Permite actualizar a todos los subcriptores de que se 
   * ha hecho una nueva release 
   * @param observable Feed que pueden ser ovservables
   */
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