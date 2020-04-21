import {LookupModel} from '../../models/lookup.model';

export const CARD_LOOKUP = [
  new LookupModel('BOA', 'Bank of America'),
  new LookupModel('CT', 'Citi'),
  new LookupModel('AMEX', 'American Express'),
  new LookupModel('DISC', 'Discover'),
  new LookupModel('CHS', 'Chase')
];

export const PURCHASE_TYPE_LOOKUPS = [
  new LookupModel('CLTH', 'Clothes'),
  new LookupModel('GROC', 'Grocery'),
  new LookupModel('EDU', 'Education'),
  new LookupModel('ENT', 'Entertainment')
];

export const CHART_TYPE = [
  new LookupModel('line', 'Line Chart'),
  new LookupModel('pie', 'Pie Chart'),
  new LookupModel('bar', 'Bar Chart'),
  new LookupModel('doughnut', 'Doughnut Chart'),
  new LookupModel('radar', 'Radar Chart'),
  new LookupModel('polarArea', 'Polar Area Chart'),
  // new LookupModel('bubble', 'Bubble Chart'),
  // new LookupModel('scatter', 'Scatter Chart'),
];

export const CHART_CATEGORIES = [
  new LookupModel('card', 'Credit Card'),
  new LookupModel('purchaseType', 'Purchased Category')
];

const STATES_JSON = [
  { "name": "Alabama", "alpha": "AL" },
  { "name": "Alaska", "alpha": "AK" },
  { "name": "Arizona", "alpha": "AZ" },
  { "name": "Arkansas", "alpha": "AR" },
  { "name": "California", "alpha": "CA" },
  { "name": "Colorado", "alpha": "CO" },
  { "name": "Connecticut", "alpha": "CT" },
  { "name": "Delaware", "alpha": "DE" },
  { "name": "District of Columbia", "alpha": "DC" },
  { "name": "Florida", "alpha": "FL" },
  { "name": "Georgia", "alpha": "GA" },
  { "name": "Hawaii", "alpha": "HI" },
  { "name": "Idaho", "alpha": "ID" },
  { "name": "Illinois", "alpha": "IL" },
  { "name": "Indiana", "alpha": "IN" },
  { "name": "Iowa", "alpha": "IA" },
  { "name": "Kansa", "alpha": "KS" },
  { "name": "Kentucky", "alpha": "KY" },
  { "name": "Lousiana", "alpha": "LA" },
  { "name": "Maine", "alpha": "ME" },
  { "name": "Maryland", "alpha": "MD" },
  { "name": "Massachusetts", "alpha": "MA" },
  { "name": "Michigan", "alpha": "MI" },
  { "name": "Minnesota", "alpha": "MN" },
  { "name": "Mississippi", "alpha": "MS" },
  { "name": "Missouri", "alpha": "MO" },
  { "name": "Montana", "alpha": "MT" },
  { "name": "Nebraska", "alpha": "NE" },
  { "name": "Nevada", "alpha": "NV" },
  { "name": "New Hampshire", "alpha": "NH" },
  { "name": "New Jersey", "alpha": "NJ" },
  { "name": "New Mexico", "alpha": "NM" },
  { "name": "New York", "alpha": "NY" },
  { "name": "North Carolina", "alpha": "NC" },
  { "name": "North Dakota", "alpha": "ND" },
  { "name": "Ohio", "alpha": "OH" },
  { "name": "Oklahoma", "alpha": "OK" },
  { "name": "Oregon", "alpha": "OR" },
  { "name": "Pennsylvania", "alpha": "PA" },
  { "name": "Rhode Island", "alpha": "RI" },
  { "name": "South Carolina", "alpha": "SC" },
  { "name": "South Dakota", "alpha": "SD" },
  { "name": "Tennessee", "alpha": "TN" },
  { "name": "Texas", "alpha": "TX" },
  { "name": "Utah", "alpha": "UT" },
  { "name": "Vermont", "alpha": "VT" },
  { "name": "Virginia", "alpha": "VA" },
  { "name": "Washington", "alpha": "WA" },
  { "name": "West Virginia", "alpha": "WV" },
  { "name": "Wisconsin", "alpha": "WI" },
  { "name": "Wyoming", "alpha": "WY" }
];

export const STATES = [];

for (const st of STATES_JSON) {
  const state: LookupModel = new LookupModel(st['alpha'], st['name']);
  STATES.push(state);
}
