import { ADD_MOVIE ,FILTER_MOVIE,LIST_MOVIE,DELETE_MOVIE} from "../ActionsTypes/MovieList"


export const addMovies=(newmovie)=>{
    return{
        type:ADD_MOVIE,
        payload:newmovie
    }
}
export const filterMovies=(inputSearch)=>{
    return{
        type:FILTER_MOVIE,
        payload:inputSearch

    }
}
export const listMovies=(moviesData)=>{
    return{
type:LIST_MOVIE,
payload:moviesData
    }
}
export const deleteMovies=(id)=>{
    return{
        type:DELETE_MOVIE,
        payload:id
    }
}