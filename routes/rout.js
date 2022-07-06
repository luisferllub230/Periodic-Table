const express = require('express');
const rout = express.Router();

//you can edit this array.
const periodicTable = ["He", "Li", "Be","C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La-Lu","Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac-Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn","Nh", "Fl", "Mc", "Lv", "Ts", "Og","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"];

//don't change this array, because it's the confirmation of the periodic table and i don't use for rendering the html periodic table :).
const confirmationPT = ["H","He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La-Lu","Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac-Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn","Nh", "Fl", "Mc", "Lv", "Ts", "Og","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"]

//color array
const footerColor = ["Others no metal","nobel gases","alkaline","alkaline earth","metalloid","halogen","Transitions metals","Others metal","lanthanides","actinides"];

//that's confirm the periodic table with a call back function
const confirmation = ()=>confirmationPT.forEach(element=>!periodicTable.includes(element) ? periodicTable.splice(confirmationPT.indexOf(element),0,"404") : null);

periodicTable.length !== confirmationPT.length ? confirmation() : null;


rout.get('/', (req, res,next) => {
    res.render('index',{
        list: periodicTable,
        footerColor: footerColor,
        title: 'Periodic Table',
        Message: 'hello world :)',
        layout: false,
    });
});

module.exports = rout;