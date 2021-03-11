import { selector, selectorFamily } from '@ks/reku';
import { fetchCites, fetchProvinces, Region } from '../../../apis';

function resolveKey(key: string): string {
    return `domain-infra-region-${key}`;
}

export const provincesQuery = selector({
    key: resolveKey('provincesQuery'),
    get: async () => {
        return await fetchProvinces();
    }
});

export const citiesQueries = selectorFamily<null | Region[], undefined | string>({
    key: resolveKey('citiesQueries'),
    get: (selectedProvinceId?: string) => async () => {
        if (selectedProvinceId) {
            return await fetchCites(selectedProvinceId);
        }
        return null;
    }
});