import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocationState } from '../store/slices/locationSlice';

const HISTORY_KEY = 'SEARCH_HISTORY';

export const saveHistory = async (history: LocationState[]) => {
  await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

export const loadHistory = async (): Promise<LocationState[]> => {
  const data = await AsyncStorage.getItem(HISTORY_KEY);
  return data ? JSON.parse(data) : [];
};