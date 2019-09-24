console.log("A thing.")

import store from './components/store.js';

const init =() => {  // this is PAGE LOADs
    // do stuff
    //display the store component
    store.makeStore();
};

init();