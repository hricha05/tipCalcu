/* eslint-disable no-console */

/**
 * Simple Tip Calculator
 * The purpose of this application is to simulate a tip calculator
 */

function btn() {
  //   calc.innerHTML = 'Blue';
  console.log('click');
}

document.querySelector('#btn-calc').addEventListener('click', btn);

const amount = document.querySelector('#amount');
const total = document.querySelector('#total');
const tax = document.querySelector('#tax');
const tip = document.querySelector('#tip');
const split = document.querySelector('#split');

function addTax() {
  console.log('tax');
}

tax.addEventListener('click', addTax);
