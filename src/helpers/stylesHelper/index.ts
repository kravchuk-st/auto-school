export default function stylesHelper(...rest: string[]):any {
  let str:string = '';
  for (let i = 0; i < rest.length; i++) {
    if(str.length == 0) {
      str += rest[i];
    } else {
      str += ' ' + arguments[i];
    }
  }
  return str;
}
