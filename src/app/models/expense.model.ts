import {AddressModel} from './address.model';

export class ExpenseModel {
  constructor(public card: String, public summary: String, public purchaseType: string,
              public amount: string, public purchaseDate: Date,
              public address: AddressModel,
              public createdDate?: Date, public updatedDate?: Date,
              public dirtyStatus?: String, public deleteInd?: String) {}
}
