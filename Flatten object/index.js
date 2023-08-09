import './style.css';
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<div class="container"><h1>Flatten Object</h1><span>Algochurn</span>
<p>Please read the description to start solving the problem.</p></div>`;

// Write your code here
const response = {
  name: 'Manu',
  age: 21,
  characteristics: {
    height: '6 feet',
    complexion: 'dark',
    hair: 'black',
  },
  techStack: {
    language: 'Javascript',
    framework: {
      name: 'Nextjs',
      version: '12',
    },
  },
};

const flattenObj = (obj) => {
  // console.log(Object.keys(obj).length);
  let result = {};
  for (const i in obj) {
    if (obj[i] instanceof Object) {
      const temp = flattenObj(obj[i]);
      for (const j in temp) {
        result[i + '.' + j] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }
  return result;
};

console.log(flattenObj(response));
