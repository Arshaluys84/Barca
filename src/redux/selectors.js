//import { createSelector } from "reselect"

export const getUsersSelector =(state)=>{
    return state.UsersPage.users
}
//export const getUsersSelector =createSelector(getUsersSelector,users=>{ return users.filter(u=>true)})
    
export const getTotalCount =(state)=>{
    return state.UsersPage.totalCount
}
export const getCount =(state)=>{
    return state.UsersPage.count
}
export const getCurrentPage =(state)=>{
    return state.UsersPage.currentPage
}
export const getIsFetching =(state)=>{
    return state.UsersPage.isFetching
}
export const getFollowingprocess =(state)=>{
    return state.UsersPage.followingprocess
}
