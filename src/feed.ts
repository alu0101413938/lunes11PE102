import { Observable } from "./observable.js";
import { Observer } from "./observer.js";
import { FeedEventType } from "./eventType.js";

/**
 * Class Feed that implements the Observable interface,
 * Feed objects can be observed
 */
export class Feed implements Observable {
  private subcriptors: Observer[] = [];
  private eventType: FeedEventType = FeedEventType.NO_EVENT;

  constructor(private id: number, private name: string) {
  }

  /**
   * @returns Devuelve los subcriptores
   */
  getSubcriptors() :Observer[] {
    return this.subcriptors;
  }

  /**
   * @returns Devuelve el id del subcriptor
   */
  getId() {
    return this.id;
  }

  /**
   * @returns Devuelve el nombre de subcriptor 
   */
  getName() {
    return this.name;
  }

  /**
   * @returns Devuelve los eventos del feed 
   */
  getEventType() {
    return this.eventType;
  }

  /**
   * Permite subcribir un subcriptor al Feed
   * @param observer es un subcriptor
   * @returns Determina si se ha podido subscribir o no
   */
  subscribe(observer: Observer) :boolean {
    if (this.subcriptors.includes(observer)) {
      console.log('The observer had already been subscribed');
      return false;
    } else {
      this.subcriptors.push(observer);
    }
    return true;
  }

  /**
   * Permite subcribir un subcriptor al Feed
   * @param observer es un subcriptor
   */
  unsubscribe(observer: Observer) {
    const index = this.subcriptors.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.subcriptors.splice(index, 1);
    }
  }

  /**
   * Permite notificar a los subcriptores
   */
  notify() {
    this.subcriptors.forEach((observer) => observer.update(this));
  }

  /**
   * Permite crear una nueva "publicacion" en el feed
   * @returns permite determinar si se ha concluido bien la "publicacion"
   */
  onRelease() :boolean {
    this.eventType = FeedEventType.RELEASE;
    this.notify();
    return true;
  }
}
