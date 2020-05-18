export const transformStringIntoSlug = function (text) {
  let transliteratedText = ''
  let a = {}

  a['Ё']='YO';a['Й']='I';a['Ц']='TS';a['У']='U';a['К']='K';a['Е']='E';a['Н']='N';a['Г']='G';a['Ш']='SH';a['Щ']='SCH';a['З']='Z';a['Х']='H';a['Ъ']='';
  a['ё']='yo';a['й']='i';a['ц']='ts';a['у']='u';a['к']='k';a['е']='e';a['н']='n';a['г']='g';a['ш']='sh';a['щ']='sch';a['з']='z';a['х']='h';a['ъ']='';
  a['Ф']='F';a['Ы']='I';a['В']='V';a['А']='a';a['П']='P';a['Р']='R';a['О']='O';a['Л']='L';a['Д']='D';a['Ж']='ZH';a['Э']='E';
  a['ф']='f';a['ы']='i';a['в']='v';a['а']='a';a['п']='p';a['р']='r';a['о']='o';a['л']='l';a['д']='d';a['ж']='zh';a['э']='e';
  a['Я']='Ya';a['Ч']='CH';a['С']='S';a['М']='M';a['И']='I';a['Т']='T';a['Ь']='';a['Б']='B';a['Ю']='YU';
  a['я']='ya';a['ч']='ch';a['с']='s';a['м']='m';a['и']='i';a['т']='t';a['ь']='';a['б']='b';a['ю']='yu';
  a['і']='i';a['ї']='i';

  for (let i in text){
    if (text.hasOwnProperty(i)) {
      if (a[text[i]] === undefined){
        transliteratedText += text[i];
      } else {
        transliteratedText += a[text[i]];
      }
    }
  }

  return transliteratedText.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
};
