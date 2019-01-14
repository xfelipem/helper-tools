/**
 * Export file
 */
import { validation as val } from './validation';
import { method as met } from './method';
import { object as obj } from './object';
import { string as str } from './string';
import { form as fom } from './form';
import { url as ur } from './url';
import { dom as dm } from './dom';

export const validation = val;
export const method = met;
export const object = obj;
export const string = str;
export const form = fom;
export const url = ur;
export const dom = dm;

const helperTools = {
    form,
    validation,
    method,
    object,
    string,
    url,
    dom
};

export default helperTools;