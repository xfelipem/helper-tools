import { validation as val } from './validation';
import { method as met } from './method';
import { object as obj } from './object';

export const validation = val;
export const method = met;
export const object = obj;

const helperTools = {
    validation,
    method,
    object
};

export default helperTools;