import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: 'ui',
    initialState: { 
        bannerText: 'Discover Latest Courses on React',
        showModal: false,
        modal: {
            text: '',
            page: '',
        }
    },
    reducers: {
        changeBannerText(state, action) {
            state.bannerText = action.payload
        },
        toggleShowModal(state, action) {
            state.modal.text = action.payload.text
            state.modal.page = action.payload.page
            state.showModal = !state.showModal
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice
