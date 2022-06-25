const IsTxt =(x)=>/^[A-Za-z]{1,50}$/i.test(x)?true:false;
 const IsEmail=(x)=>/^\[a-z]+/i.test(x)|| /^[A-Za-z]+(\.||-)?$/i.test(x)||
 /^[A-Za-z]+(\.||-)[a-z]+?$/i.test(x)||
 /^[A-Za-z]+(\.||-)[a-z]+?\@$/i.test(x)||
 /^[A-Za-z]+(\.||-)[a-z]+?\@\w+$/i.test(x)||
 /^[A-Za-z]+(\.||-)[a-z]+?\@\w+((\.||-)?)$/i.test(x)||
 /^[A-Za-z]+(\.||-)[a-z]+?\@\w+((\.||-)?\w+)$/i.test(x)||
 /^[A-Za-z]+(\.||-)[a-z]+?\@\w+((\.||-)?\w+)\.$/i.test(x)||
 /^[A-Za-z]+(\.||-)[a-z]+?\@\w+((\.||-)?\w+)\.([a-z]{1,3})$/i.test(x)?true:false;
const  IsPhone =(x)=>/^(081|080|090|091|070)[0-9]{8}$/.test(x)?true:false;
const  IsTextarea=(x)=>/^\w+$/.test(x)||
/^\w+(\s|\s\s)$/.test(x)||
/^((\w+(\s|\s\s))+\w+)$/.test(x)
?true:false;
// the password consist of letter both capital and small letter
//  it also incude  the following symbols: . @ : ? $ &
//  thsi elements mentioned above need to be insert in the form password field
// for it's validity
const  IsPassWord=(x)=>/^(((\.|\@|\_|\:|\?|\$|\&)[A-Za-z0-9])|([A-Za-z0-9](\.|\@|\_|\:|\?|\$|\&)))+/.test(x)||
/^[A-Za-z0-9]+((\.|\@|\_|\:|\?|\$|\&))/.test(x)||
/^[A-Za-z0-9]+((\.|\@|\_|\:|\?|\$|\&)\w+)/.test(x)||
/^[A-Za-z0-9]+((\.|\@|\_|\:|\?|\$|\&)\w+)|(\w+)+$/.test(x)||
/^[A-Za-z0-9]+((\.|\@|\_|\:|\?|\$|\&)\w+)|(\w+(\.|\@|\_|\:|\?|\$|\&))+$/.test(x)?true:false;
export {IsTxt,IsEmail,IsPhone,IsTextarea,IsPassWord}
