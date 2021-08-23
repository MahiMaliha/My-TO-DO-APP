
document.getElementById('save-button').addEventListener('click', function(){

    // add time 

const addTime = document.getElementById('time');

const getTime = addTime.value;

const showTime = document.getElementById('add-time');
showTime.innerText = getTime;

// addwork
const addWork = document.getElementById('write-task');

const getWork =addWork.value;

const showWork = document.getElementById('add-work');
showWork.innerText = getWork;



})