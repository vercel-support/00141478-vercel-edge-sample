
export const config = {
  runtime: 'edge',
};

import { DEFAULTS } from "../src/common";

/**
 * Sample
 */
export default async function handler(request: Request) {
  
  const payload = {
    foo: DEFAULTS.foo
  };
 
  return new Response(
    JSON.stringify({
      payload
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    },
  );
}
