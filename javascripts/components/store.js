const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;
};

const makeStore = () => {
    const domString = 'Hi New Store';
    printToDom('store-container', domString);
};

export default { makeStore };
//export default { makeStore: makeStore };