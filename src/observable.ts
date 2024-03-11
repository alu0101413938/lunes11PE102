import  { Observer } from './observer.js'
/**
 * Interface for observable classes
 */
export interface Observable {
  subscribe(observer: Observer): boolean;
  unsubscribe(observer: Observer): void;
  notify(): void;
}