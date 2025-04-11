import { DEV_SEED_DEALERSHIP_IDS } from "src/database/typeorm-seeds/workspace/dealerships";

export const DEALERSHIP_DATA_SEEDS = [
  {
    id: DEV_SEED_DEALERSHIP_IDS.FL154,
    locationId: 'FL154',
    dataType: 'INFO',
    city: 'Pinellas Park',
    code: 'FL154',
    dealershipPageUri:
      'https://www.byrider.com/dealerships/buy-here-pay-here-pinellas-park-33781-fl154',
    dealershipPhoto: 'null',
    name: 'Byrider - Pinellas Park, FL',
    state: 'FL',
    storeId: 'FL118',
    streetAddress1: '7701 Park Blvd',
    streetAddress2: '',
    websiteUrl:
      'https://www.byrider.com/dealerships/buy-here-pay-here-pinellas-park-33781-fl154',
    zipCode: '33781',
  },
  {
    id: DEV_SEED_DEALERSHIP_IDS.KY111,
    locationId: 'KY111',
    dataType: 'INFO',
    city: 'Louisville',
    code: 'KY111',
    dealershipPageUri:
      'https://www.byrider.com/dealerships/buy-here-pay-here-louisville-40219-ky111',
    dealershipPhoto: 'null',
    name: 'Byrider - Louisville, KY',
    state: 'KY',
    storeId: 'KY110',
    streetAddress1: '6507 Preston Hwy',
    streetAddress2: '',
    websiteUrl:
      'https://www.byrider.com/dealerships/buy-here-pay-here-louisville-40219-ky111',
    zipCode: '40219',
  },
];
