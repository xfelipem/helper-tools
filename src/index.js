import { validation as val } from './validation';
import { method as met } from './method';
import { object as obj } from './object';
import { form as fom } from './form';

export const validation = val;
export const method = met;
export const object = obj;
export const form = fom;

const helperTools = {
    form,
    validation,
    method,
    object
};

export default helperTools;