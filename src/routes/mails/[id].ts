import type { RequestHandler } from '@sveltejs/kit';
import { mailData, type Mail } from './../../stores';

export const get: RequestHandler = async ({ request, params }) => {
   let mail: Mail | null = null;

   mailData.subscribe((mails) => {
      mail = mails.filter((m) => m.id === Number(params.id))[0];
   });

   return {
      body: { mail },
   };
};
