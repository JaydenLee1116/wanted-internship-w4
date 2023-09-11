import { useQuery } from '@tanstack/react-query';

import { axiosFetch } from '../../api/apiClient';
import { MOCK_API_BASE_URL } from '../../api/apiConfig';

export const useGetData = () => {
  return useQuery(['data'], async () => {
    const { data } = await axiosFetch.get(MOCK_API_BASE_URL);
    return data.data;
  });
};
