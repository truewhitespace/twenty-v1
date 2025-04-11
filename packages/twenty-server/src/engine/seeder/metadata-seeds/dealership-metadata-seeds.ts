import { ObjectMetadataSeed } from 'src/engine/seeder/interfaces/object-metadata-seed';
import { FieldMetadataType } from 'twenty-shared/types';

export const DEALERSHIP_METADATA_SEEDS: ObjectMetadataSeed = {
  labelPlural: 'Dealerships',
  labelSingular: 'Dealership',
  namePlural: 'dealerships',
  nameSingular: 'dealerShip',
  icon: 'IconCarGarage',
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
      type: FieldMetadataType.TEXT,
      label: 'City',
      name: 'city',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Code',
      name: 'code',
    },
    {
      type: FieldMetadataType.LINKS,
      label: 'Dealership Page URI',
      name: 'dealershipPageUri',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Dealership Photo',
      name: 'dealershipPhoto',
    },
    // {
    //   type: FieldMetadataType.TEXT,
    //   label: 'Dealership Name',
    //   name: 'dealershipName',
    // },
    {
      type: FieldMetadataType.TEXT,
      label: 'State',
      name: 'state',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Store ID',
      name: 'storeId',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Street Address 1',
      name: 'streetAddress1',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Street Address 2',
      name: 'streetAddress2',
    },
    {
      type: FieldMetadataType.LINKS,
      label: 'Website Url',
      name: 'websiteUrl',
    },
    {
      type: FieldMetadataType.TEXT,
      label: 'Zip Code',
      name: 'zipCode',
    },
  ],
};
