import { useContext } from 'react';

// hook
import { LayoutContext } from 'hooks/context';


export const useData = ()=>{
    const { elemTexts } = useContext(LayoutContext);
    const getData = (workID)=>{
        return elemTexts.work
        .filter(data => data.id === workID)[0]
    }
    return{
        getData
    }
}