import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';

export default function SearchBar({ onSelect }: { onSelect: (details: any) => void }) {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search for a place"
      fetchDetails
      currentLocation={false}                     
  predefinedPlaces={[]}                       
  enablePoweredByContainer={false}            
      onPress={(data, details = null) => {
        if (details) onSelect(details);
      }}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
      styles={{
        container: { flex: 0 },
        listView: { backgroundColor: 'white' },
      }}
    />
  );
}
