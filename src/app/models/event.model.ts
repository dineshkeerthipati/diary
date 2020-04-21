export class EventModel {
  constructor(public crtDate: Date, public subject: String, public content: String,
              public privacy: String, public updtDate: Date, public dirtySts: String, public deleteInd: String) {}
}
