import { atom, selector } from '@ks/reku';
import { citiesQueries, provincesQuery } from '../domain';

function resolveKey(key: string): string {
    return `application-form-${key}`;
}

export const selectedProvinceIdAtom = atom({
    key: resolveKey('selectedProvinceIdAtom'),
    default: ''
});

export const provinceOptionsQuery = selector({
    key: resolveKey('provinceOptionsQuery'),
    get: ({ get }) => {
        return get(provincesQuery).map(({ id, name }) => ({
            value: id,
            label: name
        }))
    }
});

export const cityOptionsQuery = selector({
    key: resolveKey('cityOptionsQuery'),
    get: ({ get }) => {
        const selectedProvinceId = get(selectedProvinceIdAtom);
        return get(citiesQueries(selectedProvinceId))?.map(({ id, name }) => ({
            value: id,
            label: name
        }))
    }
});

export const formOptionsQuery = selector({
    key: resolveKey('formOptionsQuery'),
    get: ({ get }) => {
        const selectedProvinceId = get(selectedProvinceIdAtom);
        return {
            provinces: get(provincesQuery),
            cities: get(citiesQueries(selectedProvinceId))
        }
    }
})