export class Presentation {
  private _id: number;

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  private _titre: String;

  public get titre(): String {
    return this._titre;
  }
  public set titre(value: String) {
    this._titre = value;
  }
  private _description: String;

  public get description(): String {
    return this._description;
  }
  public set description(value: String) {
    this._description = value;
  }
  private _pres: String;

  public get pres(): String {
    return this._pres;
  }
  public set pres(value: String) {
    this._pres = value;
  }
  private _video: String;

  public get video(): String {
    return this._video;
  }
  public set video(value: String) {
    this._video = value;
  }
}
