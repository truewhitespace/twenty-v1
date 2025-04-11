import { ObjectMetadataSeed } from 'src/engine/seeder/interfaces/object-metadata-seed';
import { FieldMetadataType } from 'twenty-shared/types';

export const VEHICLE_METADATA_SEEDS: ObjectMetadataSeed = {
  labelPlural: 'Vehicles',
  labelSingular: 'Vehicle',
  namePlural: 'vehicles',
  nameSingular: 'vehicle',
  icon: 'IconCarSuv',
  fields: [
    {
      type: FieldMetadataType.TEXT,
      label: 'Location ID',
      name: 'locationId',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Datatype',
      name: 'dataType',
    },
    {
      type: FieldMetadataType.NUMBER,
      label: 'City MPG',
      name: 'cityMpg',
    },
    {
      type: FieldMetadataType.LINKS,
      label: 'Default Image',
      name: 'defaultImage',
    },
    {
      type: FieldMetadataType.LINKS,
      label: 'Default Medium Image',
      name: 'defaultMdImage',
    },
    {
      type: FieldMetadataType.LINKS,
      label: 'Default Small Image',
      name: 'defaultSmImage',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Displacement',
      name: 'displacement',
    },
    {
      type: FieldMetadataType.NUMBER,
      label: 'Door Count',
      name: 'doorCount',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Drive Type',
      name: 'driveType',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Exterior Color',
      name: 'exteriorColor',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Fuel Type',
      name: 'fuelType',
    },
    {
      type: FieldMetadataType.BOOLEAN,
      label: 'Has Images',
      name: 'hasImages',
    },
    {
      type: FieldMetadataType.NUMBER,
      label: 'Highway MPG',
      name: 'hwyMpg',
    },
    {
      type: FieldMetadataType.NUMBER,
      label: 'Image Count',
      name: 'imageCount',
    },
    {
      type: FieldMetadataType.ARRAY,
      label: 'Image Urls',
      name: 'imageUrls',
    },
    {
      type: FieldMetadataType.BOOLEAN,
      label: 'Is Working',
      name: 'isWorking',
    },
    {
      type: FieldMetadataType.ARRAY,
      label: 'Key Features',
      name: 'keyFeatures',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Make',
      name: 'make',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Market Class',
      name: 'marketClass',
    },
    {
      type: FieldMetadataType.NUMBER,
      label: 'Miles',
      name: 'miles',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Model',
      name: 'model',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Modified Date',
      name: 'modifiedDate',
    },
    {
      type: FieldMetadataType.NUMBER,
      label: 'Number Of Cylinders',
      name: 'noOfCylinders',
    },
    {
      type: FieldMetadataType.NUMBER,
      label: 'Number Of Speeds',
      name: 'noOfSpeeds',
    },
    {
      type: FieldMetadataType.CURRENCY,
      label: 'Price In Dollars',
      name: 'priceInDollars',
    },
    {
      type: FieldMetadataType.NUMBER,
      label: 'Stock Number',
      name: 'stockNumber',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Style',
      name: 'style',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Sub Model',
      name: 'subModel',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Transmission',
      name: 'transmission',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Transmission Type',
      name: 'transmissionType',
    },
    {
      type: FieldMetadataType.ARRAY,
      label: 'Vehicle Description',
      name: 'vehicleDescription',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Vehicle Type',
      name: 'vehicleType',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'VIN',
      name: 'vin',
    },
    {
      type: FieldMetadataType.NUMBER,
      label: 'Year',
      name: 'year',
    },
  ],
};
