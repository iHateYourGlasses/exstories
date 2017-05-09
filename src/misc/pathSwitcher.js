/**
 * Created by Art on 05.05.2017.
 */

export default function pathSwitch() {
  let curLocation = document.location.host;
  switch (curLocation){
    case 'exstories.ru':
      return 'https://exstories.ru/';
    default:
      return 'http://exstories/';
  }
}
