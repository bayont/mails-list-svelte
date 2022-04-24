import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ request, params }) => {
   const page = Number(params.id);
   return {
      body: { page },
   };
};
