import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies }) {
    if (!cookies){
        return fail(401);
    }
    let token = cookies.get('jwt')

}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const token = cookies.get("jwt")

        const location = {
            filmType: data.get('filmType'),
            filmProducerName: data.get('filmProducerName'),
            endDate: data.get('endDate'),
            filmName: data.get('filmName'),
            district: data.get('district'),
            sourceLocationId: data.get('sourceLocationId'),
            filmDirectorName: data.get('filmDirectorName'),
            address: data.get('address'),
            startDate: data.get('startDate'),
            year: data.get('year')
        };

        const body = await api.post('locations/',  location,token);

        if (body.errors) {
            return fail(401, body);

        }


        throw redirect(307, '/Location');
    }
};
