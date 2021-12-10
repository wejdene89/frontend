export class Event {
  private _id: number;

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  private _titreevent: String;

  public get titreevent(): String {
    return this._titreevent;
  }
  public set titreevent(value: String) {
    this._titreevent = value;
  }

  private _descriptionevent: String;

  public get descriptionevent(): String {
    return this._descriptionevent;
  }
  public set descriptionevent(value: String) {
    this._descriptionevent = value;
  }

  private _imageevent: String;

  public get imageevent(): String {
    return this._imageevent;
  }
  public set imageevent(value: String) {
    this._imageevent = value;
  }

}
