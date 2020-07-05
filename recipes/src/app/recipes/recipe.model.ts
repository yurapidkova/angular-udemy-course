export class Recipe {
  public name;
  public description;
  public img;

  constructor(name: string, desc: string, img: string) {
    this.name = name;
    this.description = desc;
    this.img = img;
  }
}
