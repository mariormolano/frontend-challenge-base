import { Exome } from "exome";

class EventStore extends Exome {
  public draggables = false;

  public setDraggables(draggables: boolean): void {
    this.draggables = draggables;
  }
}

export const eventStore = new EventStore();
