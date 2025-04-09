import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';
import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';

export const useRecs = (targetableObject: ActivityTargetableObject) => {
  const { records, loading } = useFindManyRecords<any>({
    skip: false,
    objectNameSingular: CoreObjectNameSingular.Vehicle,
    // filter: {},
    filter: {
      recommendedToId: {
        eq: targetableObject.id,
      },
    },
  });

  return {
    records,
    loading,
  };
};
