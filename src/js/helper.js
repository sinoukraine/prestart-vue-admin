import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

export const RechargePlanPrices = {
  100: 10,
  500: 45,
  1000: 80
}

export function toLowerCaseObjectKeys(source) {
  return Object.keys(source)
    .reduce((destination, key) => {
      destination[key.toLowerCase()] = source[key];
      return destination;
    }, {});
}

export function isObjEmpty(obj) {
  // null and undefined are "empty"
  if (obj == null) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0)    return false;
  if (obj.length === 0)  return true;

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== "object") return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
  for (let key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

export function sortArrayByObjProps(list, sortBy){
  //sortBy.direction == 1  means asc
  //sortBy.direction == -1 means desc
  if(list && list.length){
    list.sort(function(a,b){
      let i = 0, result = 0;
      while(i < sortBy.length && result === 0) {
        result = sortBy[i].direction*(a[ sortBy[i].prop ].toString().toUpperCase() < b[ sortBy[i].prop ].toString().toUpperCase() ? -1 : (a[ sortBy[i].prop ].toString().toUpperCase() > b[ sortBy[i].prop ].toString().toUpperCase() ? 1 : 0));
        i++;
      }
      return result;
    })
  }
  return list;
}


export function getFormDataFromObject(query){
  let data = new FormData();
  if (!isObjEmpty(query)){
    const arr = Object.keys(query)
    arr.forEach(element => {
      if(Array.isArray(query[element])){
        for (let i = 0; i < query[element].length; i++) {
          if (query[element][i]) data.append(element+'[]', query[element][i])
        }
      }else{
        if (query[element] || query[element] === 0 || query[element] === false) data.append(element, query[element])
      }
    })
  }
  return data
}

export function dateFormat(dateStr, outFormat = 'date', inFormat ){
  const store = useStore()

  const options={};
  if(outFormat.includes('date')){
    options.day = '2-digit'
    options.month = '2-digit'
    options.year = 'numeric'
  }
  if(outFormat.includes('time')){
    options.hour = '2-digit'
    options.minute = '2-digit'
    options.second = '2-digit'
  }

  const locale = store.getters.UserInfo.Locale || 'en-US'
  return new Intl.DateTimeFormat(locale, options).format(new Date(dateStr))
}

export function directionText(direction){
  const { t } = useI18n()
  direction = parseFloat(direction);
  let ret = t('COM_MSG029');
  switch (true){
    case (direction >= 338 || direction <= 22 ):
      ret = t('COM_MSG021');
      break;
    case (direction >= 23 && direction <= 75 ):
      ret = t('COM_MSG022');
      break;
    case (direction >= 76 && direction <= 112 ):
      ret = t('COM_MSG023');
      break;
    case (direction >= 113 && direction <= 157 ):
      ret = t('COM_MSG024');
      break;
    case (direction >= 158 && direction <= 202 ):
      ret = t('COM_MSG025');
      break;
    case (direction >= 203 && direction <= 247 ):
      ret = t('COM_MSG026');
      break;
    case (direction >= 248 && direction <= 292 ):
      ret = t('COM_MSG027');
      break;
    case (direction >= 293 && direction <= 337 ):
      ret = t('COM_MSG028');
      break;
  }
  return ret
}

export function getParentUrl() {
  var isInIframe = (parent !== window),
    parentUrl = null;

  if (isInIframe) {
    parentUrl = document.referrer;
  }

  return parentUrl;
}

export function getDaysInMonth(y,m){
  return  new Date(y, m +1, 0).getDate();
}