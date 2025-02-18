import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}

interface UserState {
  userData: UserData | null;
  unsavedChanges: boolean;
}

const initialState: UserState = {
  userData: null,
  unsavedChanges: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
      state.unsavedChanges = false;
    },
    setUnsavedChanges: (state, action: PayloadAction<boolean>) => {
      state.unsavedChanges = action.payload;
    },
  },
});

export const { setUserData, setUnsavedChanges } = userSlice.actions;
export default userSlice.reducer;