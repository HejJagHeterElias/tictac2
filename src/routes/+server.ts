import type { RequestHandler } from './$types';
import {json} from '@sveltejs/kit';
import  { _visitsGlobal } from '../../../first/src/routes/+page.server';


export const GET: RequestHandler = async () => {
    return json({ "_visitsGlobal":_visitsGlobal });
};