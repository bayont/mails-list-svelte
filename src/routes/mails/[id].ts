import type { RequestHandler } from '@sveltejs/kit';
import { mailData, type Mail } from './../../stores';

export const get: RequestHandler = async ({ request, params }) => {
   let mail: Mail | null = null;
   const id = Number(params.id);

   $: mailData.subscribe((mails) => {
      mail = mails.filter((m) => m.id === id)[0];
   });

   return {
      body: { mail },
   };
};
