import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  termo?: string
}

const initialState: FiltroState = {
  termo: ''
}

const filtroSLice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = filtroSLice.actions

export default filtroSLice.reducer
