import  { Observer } from './observer'
/**
 * Interface for observable classes
 */
export interface Observable {
  subscribe(observer: Observer): boolean;
  unsubscribe(observer: Observer): void;
  notify(): void;
}