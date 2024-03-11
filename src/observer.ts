import { Observable } from "./observable";
/**
 * Interface for observer classes
 */
export interface Observer {
  update(observable: Observable): void;
}