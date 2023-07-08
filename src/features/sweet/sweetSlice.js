import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchSweet } from './sweetAPI';

const initialState = {
  sweetStuff: {},
  driedFruits: {},
  cookies: {},
  oreshki: {},
  collected: {
    'Chia Seeds':0,
    'Pumpkin Seeds':0,
    'White Chocolate':0,
    'Chocolate Drops':0,
  }
}

export const getSweet = createAsyncThunk(
  'getSweet',
  async()=>{
    const result = await fetchSweet();
    return result;
  }
) 

export const counterSlice = createSlice({
  name: 'sweet',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes.
    //   // Also, no return statement is required from these functions.
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    collected: (state, action) => {
      console.log(action,'action');
      if(action.payload.option !== 'empty'){
        let key = action.payload.option;
        if(action.payload.do === 'add'){
          state.collected[key] = state.collected[key] + 1 > 50 ? 50 : state.collected[key] + 1;
        }
        if(action.payload.do === 'sub'){
          state.collected[key] = state.collected[key] - 1 < 0 ? 0 : state.collected[key] - 1;
        }
      }else{
        state.collected = {}
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSweet.fulfilled,(state,action)=>{
        state.sweetStuff = action.payload[0];
        state.driedFruits = action.payload[1];
        state.cookies = action.payload[2];
        state.oreshki = action.payload[3];
      })
    }
})

// Action creators are generated for each case reducer function
export const { collected } = counterSlice.actions;

export const selectSweet = state => state.sweet.sweetStuff;
export const selectDried = state => state.sweet.driedFruits;
export const selectCookies = state => state.sweet.cookies;
export const selectOreshki = state => state.sweet.oreshki;
export const selectCollected = state => state.sweet.collected;

export default counterSlice.reducer