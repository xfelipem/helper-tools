import { validation as val } from './validation';
import { method as met } from './method';
import { object as obj } from './object';
import { form as fom } from './form';
import { url as ur } from './url';
import { dom as dm } from './dom';

export const validation = val;
export const method = met;
export const object = obj;
export const form = fom;
export const url = ur;
export const dom = dm;

const helperTools = {
    form,
    validation,
    method,
    object,
    url,
    dom
};

export default helperTools;