import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchSweet } from './sweetAPI';

const initialState = {
  sweetStuff: {},
  driedFruits: {},
  cookies: {},
  oreshki: {},
  collectedSweets: {
    'Chia Seeds':0,
    'Pumpkin Seeds':0,
    'White Chocolate':0,
    'Chocolate Drops':0,
  },
  collectedDried: {
    'Cherry':0,
    'Mango':0,
    'White cherry':0,
    'Cherry tomato':0,
  },
  collectedCookies: {
    'Star':false,
    'Christmas Tree':false,
    'Christmas Deer':false,
    'Ginger Man':false,
    'Easter Theme':false,
  },
  collectedOreshki: {
    'Nutella':false,
    'Coconut cream':false,
    'Vanilla Cream':false,
    'Chocolate cream':false,
    'Caramel cream':false,
  },
  orders:[]
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
    collected: (state, action) => {
      console.log(action,'action');
      if(action.payload.option !== 'empty'){
        let key = action.payload.option;
        if(action.payload.do === 'add'){
          state.collectedSweets[key] = state.collectedSweets[key] + 1 > 50 ? 50 : state.collectedSweets[key] + 1;
        }
        if(action.payload.do === 'sub'){
          state.collectedSweets[key] = state.collectedSweets[key] - 1 < 0 ? 0 : state.collectedSweets[key] - 1;
        }
      }else{
        state.collectedSweets = {
          'Chia Seeds':0,
          'Pumpkin Seeds':0,
          'White Chocolate':0,
          'Chocolate Drops':0,
        }
      }
    },
    collectDried: (state, action) => {
      console.log(action,'action');
      if(action.payload.option !== 'empty'){
        let key = action.payload.option;
        if(action.payload.do === 'add'){
          state.collectedDried[key] = state.collectedDried[key] + 1 > 50 ? 50 : state.collectedDried[key] + 1;
        }
        if(action.payload.do === 'sub'){
          state.collectedDried[key] = state.collectedDried[key] - 1 < 0 ? 0 : state.collectedDried[key] - 1;
        }
      }else{
        state.collectedDried = {
          'Cherry':0,
          'Mango':0,
          'White cherry':0,
          'Cherry tomato':0,
        }
      }
    },
    collectCookies: (state, action) => {
      if(action.payload.option !== 'empty'){
        state.collectedCookies[action.payload.title] = action.payload.option
      }else{
        state.collectedCookies = {
          'Star':false,
          'Christmas Tree':false,
          'Christmas Deer':false,
          'Ginger Man':false,
          'Easter Theme':false,
        }
      }
    },
    collectOreshki: (state, action) => {
      if(action.payload.option !== 'empty'){
        state.collectedOreshki[action.payload.title] = action.payload.option;
      }else{
        state.collectedOreshki = {
          'Nutella':false,
          'Coconut cream':false,
          'Vanilla Cream':false,
          'Chocolate cream':false,
          'Caramel cream':false,
        }
      }
    },
    orderList: (state, action) => {
      state.orders.push(action.payload);
    }
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
export const { collected, collectDried, collectCookies, collectOreshki, orderList } = counterSlice.actions;

export const selectSweet = state => state.sweet.sweetStuff;
export const selectDried = state => state.sweet.driedFruits;
export const selectCookies = state => state.sweet.cookies;
export const selectOreshki = state => state.sweet.oreshki;
export const selectCollected = state => state.sweet.collectedSweets;
export const selectCollectedDried = state => state.sweet.collectedDried;
export const selectCollectedCookies = state => state.sweet.collectedCookies;
export const selectCollectedOreshki = state => state.sweet.collectedOreshki;
export const selectOrders = state => state.sweet.orders;

export default counterSlice.reducer