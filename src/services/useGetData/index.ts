import { useQuery } from '@tanstack/react-query';

import { axiosFetch } from '../../api/apiClient';
import { getArrayWithKeyFromObject } from '../../utils/getArrayWithKeyFromObject';
import { getArrayWithSplittedValue } from '../../utils/getArrayWithSplittedValue';
import { NEW_FIELD_NAME_FROM_OBJECT } from '../../constants';

export const useGetData = () => {
  return useQuery(['data'], async () => {
    const { data } = await axiosFetch.get('/');
    const { response } = data;
    return getArrayWithSplittedValue(
      getArrayWithKeyFromObject(response, NEW_FIELD_NAME_FROM_OBJECT),
      NEW_FIELD_NAME_FROM_OBJECT,
      ' ',
      1,
    );
  });
};
