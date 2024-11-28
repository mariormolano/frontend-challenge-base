import { Exome } from "exome";

class EventsStore extends Exome {
  public modalSatate: boolean = false;
  public slide: boolean = false;
  public showPassword: string = "password";

  public openModal(): void {
    this.modalSatate = true;
  }
  public closeModal(): void {
    this.modalSatate = false;
    this.showPassword = "password";
  }

  public sing(): void {
    this.slide = false;
  }
  public login(): void {
    this.slide = true;
  }

  public setShowPassword(payload: boolean): void {
    this.showPassword = payload ? "text" : "password";
  }
}

export const eventsStore = new EventsStore();
