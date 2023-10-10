import type { PageServerLoad, Actions } from './$types';
import {redirect} from '@sveltejs/kit';

export const load = (async ({cookies}) => {
    
    let username = cookies.get('user')
    return {

        username
    };


}) satisfies PageServerLoad;

export const actions: Actions = {
    logout: async ({cookies}) =>{
            cookies.delete('user')
            throw redirect(307, "/login");
    }
    
}