import React, { useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setLocation } from '../store/slices/locationSlice';
import { addToHistory, setHistory } from '../store/slices/historySlice';
import { loadHistory, saveHistory } from '../services/storage';
import SearchBar from '../components/SearchBar';

export default function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const location = useSelector((state: RootState) => state.location);
  const history = useSelector((state: RootState) => state.history);

  useEffect(() => {
    loadHistory().then(data => dispatch(setHistory(data)));
  }, []);

  useEffect(() => {
    saveHistory(history);
  }, [history]);

  const handleSelect = (details: any) => {
    const loc = {
      lat: details.geometry.location.lat,
      lng: details.geometry.location.lng,
      name: details.name,
      address: details.formatted_address,
    };
    dispatch(setLocation(loc));
    dispatch(addToHistory(loc));
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar onSelect={handleSelect} />
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude: location.lat, longitude: location.lng }} />
      </MapView>
      <FlatList
        data={history}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => dispatch(setLocation(item))}>
            <Text style={{ padding: 10 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
