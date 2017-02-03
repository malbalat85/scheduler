/* US phone (333) 827-9999 or (333)838-9929 */
$.validator.addMethod('phoneUS', ( value ) => {
  return /^(\([0-9]{3}\)|[0-9]{3}-|[0-9]{3})([0-9]{3}-|[0-9]{3})[0-9]{4}$/.test(value);
});
/* Best to validate against patters */
$.validator.addMethod("patter",(value, element, regexp) => {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
});