/**
 * Created by Art on 03.04.2017.
 */

export const loadState = () =>{
    try {
        const localStateParts = localStorage.getItem('state');
        if(localStateParts === null){
            return undefined
        }
        return JSON.parse(localStateParts);
    } catch(err) {
        return undefined
    }
}
export const saveState = (state) =>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }catch (err){
        console.log(err)
    }
}