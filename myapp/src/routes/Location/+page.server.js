import * as api from '$lib/api.js';

export async function load({ locals, params }) {

        let token = locals.token;

        let body = await api.get('locations',token);


        //console.log(body);
        return {body,token};
}
