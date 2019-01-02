import anime from "animejs";
import moment from "moment";

export const transformDate = (date, format = "LL") =>
  moment(date)
    .locale("ru")
    .format(format);
export const selectText = element => {
  var doc = document,
    text = element,
    range,
    selection;

  if (doc.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(text);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
  }
};
export const listen = ({
  element = window,
  callback,
  event = "DOMContentLoaded"
}) => {
  // console.log('bind', event, 'for', element);
  element.addEventListener(event, callback);
};

export const doByYScroll = async ({
  target,
  offsetY = 0,
  condition = true,
  onTrigger,
  direction = "bottom"
}) => {
  const currentScrollPosition = target.scrollTop;

  if (condition) {
    switch (direction) {
      case "bottom":
        if (currentScrollPosition > offsetY) {
          onTrigger();
        }
        break;
      case "top":
        if (currentScrollPosition < offsetY) {
          onTrigger();
        }
        break;
      default:
        throw new Error(
          'You can use one of these directions: "top" or "bottom".'
        );
        break;
    }
  }
};

export const onMoveAwesomeButton = async (e, boundingClientRect, docStyle) => {
  const x = e.clientX - boundingClientRect.left;
  const y = e.clientY - boundingClientRect.top;

  const xc = boundingClientRect.width / 2;
  const yc = boundingClientRect.height / 2;

  const dx = x - xc;
  const dy = y - yc;

  docStyle.setProperty("--rx", `${dy / -1}deg`);
  docStyle.setProperty("--ry", `${dx / 10}deg`);
};

export const onLeaveAwesomeButton = async (e, boundingClientRect, docStyle) => {
  docStyle.setProperty("--ty", "0");
  docStyle.setProperty("--rx", "0");
  docStyle.setProperty("--ry", "0");
};
export const onDownAwesomeButton = async (e, boundingClientRect, docStyle) => {
  docStyle.setProperty("--tz", "-25px");
};

export const onMouseUpParentAwesomeButton = async function() {
  const docStyle = document.documentElement.style;

  docStyle.setProperty("--tz", "-12px");
};

export const setTabPosition = async (
  tab,
  index,
  action = "set",
  linkWidth = 155
) => {
  switch (action) {
    case "set":
      tab.style.left = linkWidth * index + "px";
      tab.dataset.currentIndex = index;
      setTabPosition(tab, index, "clearTranslate");
      break;
    case "translate":
      tab.style.transform = `translate(${linkWidth *
        (index - tab.dataset.currentIndex) +
        "px"})`;
      tab.dataset.transformed = "true";
      break;
    case "clearTranslate":
      tab.style.transform = "";
      tab.dataset.transformed = "false";
      break;
    default:
      break;
  }
};

export async function doBy({
  callback,
  condition = window.innerWidth > 768,
  fallback = false
}) {
  if (condition) {
    callback();
  } else {
    if (fallback) fallback();
  }
}
export function transformName(name) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`;
}

export const throttle = callback => {
  let isRunning = false;

  return event => {
    if (isRunning) return;

    isRunning = true;

    window.requestAnimationFrame(() => {
      callback(event);
      isRunning = false;
    });
  };
};
// https://gist.github.com/gordonbrander/2230317
export const ID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};
export const slideTo = ({ selector = false, element = false, offset = 0 }) => {
  if (selector) {
    element = document.querySelector(selector);
  }

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  if (offset) {
    document.documentElement.scrollTop -= offset;
  }
};

export const cookiesHandler = {
  setUsernameAndPasswordToCookies: ({ site, username, password }) => {
    localStorage.setItem(`${site}Password`, password);
    localStorage.setItem(`${site}Username`, username);
  },
  getUsernameAndPasswordFromCookies: site => ({
    username: localStorage.getItem(`${site}Username`),
    password: localStorage.getItem(`${site}Password`)
  }),
  clearCookies: site => {
    localStorage.removeItem(`${site}Username`);
    localStorage.removeItem(`${site}Password`);
  }
};

export function timeout(callback, timeout) {
  // stuff for animating goes here
  let pastTime = 0;
  function animate(time) {
    if (!pastTime) {
      pastTime = time;
    }
    const delta = time - pastTime;

    if (delta >= timeout) {
      callback();
      return false;
    }

    requestAnimationFrame(animate);
  }

  animate();
}

export const localData = {
  get: (key, isJSON = true) => {
    const value = localStorage.getItem(key);

    if (isJSON) return JSON.parse(value);

    return value;
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  delete: key => {
    localStorage.removeItem(key);
  }
};

export const convertDate = date => {
  return new Date(date).toLocaleDateString("ru-RU", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
};

export const prevent = event => {
  event.preventDefault();
  return false;
};
export const notFollow = (event, href) => {
  prevent(event);
  window.open(href);
};

export function getArray(object) {
  let newArray = [];
  for (const prop in object) {
    newArray.push(object[prop]);
  }
  return newArray;
}
