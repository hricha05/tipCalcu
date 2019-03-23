/* eslint-disable no-console */

/**
 * Simple Tip Calculator
 * The purpose of this application is to simulate a tip calculator.
 * The purpose of this project is to practice.
 */

const bill = document.querySelector('#input').textContent;
const output = document.querySelector('#outputText').textContent;

function btn() {
  const text = document.getElementById('bill').value;
  document.getElementById('outputText').innerText = text;
  console.log(`${ bill } User input selected successfully`);
}

document.querySelector('#calculate').addEventListener('click', btn);

/**
 * TODO:
 * - Create a function to calculate the total cost of a bill (tip included).
 * - For bills under £20 added tip percent should be 5%
 * - For bills over £20 and under £50 the tip percent should be 10%
 * - For bill amounts over £50 the tip percent should be 20%.
 * - Create a function to enable to user to split the bill amount entered equally.
 */

function addTip() {
  // FIXME: function needs to link to html tags
  let tipTotal = 0;

  if (bill >= 100) {
    console.log('tip 20%');
    tipTotal = bill * 0.02;
    console.log(tipTotal);
  } else if (bill >= 50 && bill <= 100) {
    console.log('tip 10%');
    tipTotal = bill * 0.01;
    console.log(tipTotal);
  } else if (bill < 50) {
    console.log('tip 5%');
    tipTotal = bill * 0.05;
    console.log(tipTotal);
  }
  return tipTotal;
}

document.querySelector('#btn-tip').addEventListener('click', addTip);

const bills = [64.57, 87.49, 4, 150, 21];
const tip = 0.02;

// eslint-disable-next-line no-shadow
bills.forEach((bill) => {
  let total = 0;
  if (bill >= 80) {
    total = Math.floor((tip * bill), 2);
    console.log(`${ 'tip high ' } ${ total }`);
  } else {
    total = Math.floor((tip * bill), 2);
    console.log(`${ 'tip low ' } ${ total }`);
  }
});
