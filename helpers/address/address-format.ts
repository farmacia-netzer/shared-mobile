import { getKeysWithValues } from "../obj.utils";

interface IGetAddressAndPosition {
    address: any;
    position?: { lat: number; lng: number };
}

export const getAddressAndPosition = (
    place,
    position?: { lat: number; lng: number }
): IGetAddressAndPosition => {
    let address: any = {};

    if (!Array.isArray(place?.address_components)) {
        return {
            address,
            position: {
                lat: 18.5265826,
                lng: -69.8046947
            }
        };
    }

    let keys = [
        'neighborhood',
        'locality',
        'administrative_area_level_1',
        'administrative_area_level_2',
        'country',
        'route',
        'street_number'
    ];

    place.address_components.forEach(mm => {
        keys.forEach(key => {
            if (mm.types.includes(key)) {
                address = {
                    ...address,
                    [key]: mm.long_name
                };
            }
        });
    });

    return {
        address: getKeysWithValues({
            number: address?.street_number,
            street: address?.route,
            address: place?.formatted_address,
            city: address?.locality,
            name: place?.name
        }),
        position: {
            lat: position ? position.lat : place?.geometry?.location?.lat(),
            lng: position ? position.lng : place?.geometry?.location?.lng()
        }
    };
};
