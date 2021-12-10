export class New {

  private _id: number;

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  private _titrenews: String;

  public get titrenews(): String {
    return this._titrenews;
  }
  public set titrenews(value: String) {
    this._titrenews = value;
  }

  private _descriptionnews: String;

  public get descriptionnews(): String {
    return this._descriptionnews;
  }
  public set descriptionnews(value: String) {
    this._descriptionnews = value;
  }

  private _imagenews: String;

  public get imagenews(): String {
    return this._imagenews;
  }
  public set imagenews(value: String) {
    this._imagenews = value;
  }


}
