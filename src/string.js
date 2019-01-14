import _ from 'lodash';

export const reverse = (string) => {
  const stringDivider = '';

  return _.join(_.reverse(_.split(string, stringDivider)), stringDivider);
};