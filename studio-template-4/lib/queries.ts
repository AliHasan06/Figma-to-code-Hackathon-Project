import {groq} from 'next-sanity';
export const allProductsQuery = groq`*[_type == "product"]`;

export const fourProductsQuery = groq`*[_type == "product"][0..3]`;

