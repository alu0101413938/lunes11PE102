import { Observable } from "./observable.js";
/**
 * Interface for observer classes
 */
export interface Observer {
  update(observable: Observable): void;
}