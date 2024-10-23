
const getCroppedImageUrl = (url:string) => {
  //kuch games hongi jinki image ni ho gi to filhal ye ky aisy url ko retunr kr dy 
 if(!url) return '';

// big image thi ye jisy load kr rhy thy lekin ham usy cropr kr ky load krna chahty thy
// ta ky slow net waly ko masla na ho. image ky url main ye dala wo crop ho gai. is website pe to kam kr gya ye
// bad main ab croped pechy sy ai ha slwo wala bi load kr ly ga ab isy khud jitni dimenstion main dikhana ha wo dikha sakty han card main
  const target='media/'
  // length di ha ta ky media/ means last tak jaye / tak
  const index= url.indexOf(target) + target.length;
  //begineing sy ly ky akhir tak sary characters mil gaye us main crop add kr do
   return url.slice(0,index) + 'crop/600/400/' + url.slice(index) // index sy ab last tak 
   // we can verify by copying image url from network
}

export default getCroppedImageUrl;