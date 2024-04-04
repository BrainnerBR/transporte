import React, { useContext, useEffect, useState } from 'react';
import './inputItem.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SourceContext } from '../../../context/SourceContext';
import { DestinationContext } from '../../../context/DestinationContext';

function InputItem({ type }) {
    const [value, setValue] = useState(null);
    const [placeholder, setPlaceholder] = useState(null);
    const {source, setSource} = useContext(SourceContext)
    const {destination, setDestination} = useContext(DestinationContext)

    useEffect(() => {
        setPlaceholder(type === 'source' ? 'Inicio del viaje' : 'Fin del viaje');
    }, [type]);

    const getLatAndLng = (place, type) => {
        if (place && place.value) {
            const placeId = place.value.place_id;
            const service = new window.google.maps.places.PlacesService(document.createElement('div'));
            service.getDetails({ placeId }, (place, status) => {
                if (status === 'OK' && place.geometry && place.geometry.location) {
                    console.log(place.geometry.location.lng())
                    if (type === 'source') {
                        setSource({
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng(),
                            name: place.formatted_address,
                            label: place.name
                        })
                    } else {
                        setDestination({
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng(),
                            name: place.formatted_address,
                            label: place.name
                        })
                    }
                }
            });
        }
    };
    
    return (
        <div>
            <GooglePlacesAutocomplete
                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                onLoad={(autocompleteService) => {
                    window.google = {
                        maps: {
                            places: {
                                PlacesService: autocompleteService
                            }
                        }
                    };
                }}
                selectProps={{
                    value,
                    placeholder: placeholder,
                    isClearable: true,
                    onChange: (place) => {
                        getLatAndLng(place);
                        setValue(place);
                    },
                    components: {
                        DropdownIndicator: value ? null: false
                    },
                    styles: {
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: '#f0f0f0',
                            marginBottom: '20px',
                            cursor: 'text',
                        })
                    }
                }}
            />
        </div>
    );
}

export default InputItem;
