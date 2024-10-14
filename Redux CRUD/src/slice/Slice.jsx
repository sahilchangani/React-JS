import { createSlice } from "@reduxjs/toolkit";



export const detail=createSlice({
    name:'student',
    initialState:{
        student:[],

    }
    ,
    reducers:{
        
        addStudent:(state,action)=>{
            state.student.push(action.payload);
        },

        deleteStudent:(state,action)=>{
            state.student=state.student.filter((student)=>student.id!==action.payload);
        }
    }
})



export const{addStudent,deleteStudent}=detail.actions
export default detail.reducer