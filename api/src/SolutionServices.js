import fs from 'fs';
const solutionDataPath = './src/solutionData.json';
import * as path from 'path';
// import solutionDataPath from path.join(__dirname, './data/solutionData.json');
// const fs = require('fs');
// const path = require("path");
// const solutionDataPath = path.join(__dirname, './data/solutionData.json');

function getGroupSolves(groupID) {
    let json = JSON.parse(fs.readFileSync(solutionDataPath, {encoding:'utf-8', flag:'r'}));
    let group = json.filter(g => {return g.id == groupID})[0];
    return group;
}

function getAllSolves() {
    let json = JSON.parse(fs.readFileSync(solutionDataPath, {encoding:'utf-8', flag:'r'}));
    return json;
}

function submitSolve(groupID, solitaireID){
    console.log(`Trying to update solve ${solitaireID} for group ${groupID}`);
    let solve = {
        "solitaireid": solitaireID
    };
    let json = JSON.parse(fs.readFileSync(solutionDataPath, {encoding:'utf8', flag:'r'}));
    // console.log("JSON object before addition");
    // console.log(json);

    let group = json.filter(g => {return g.groupid == groupID})[0];
    const index = json.map(g => g.groupid).indexOf(groupID);
    
    let checkSolutionExist = group.solves.filter(s => {return s.solitaireid == solitaireID})[0];    // [0] Removes the square brackets
    if(checkSolutionExist === undefined) {
        console.log(`checkSolutionExist: ${checkSolutionExist} is undefined`);
        group.solves.push(solve);
        json[index] = group;
        fs.writeFileSync(solutionDataPath, JSON.stringify(json, null, 2));
    }
    else {
        console.log(`checkSolutionExist: ${checkSolutionExist} already exists`);
    }
    return json;
}

function removeSolve(groupID, solitaireID){
    console.log(`Trying to remove solve ${solitaireID} for group ${groupID}`);
    let json = JSON.parse(fs.readFileSync(solutionDataPath, {encoding:'utf8', flag:'r'}));
    // console.log("JSON grp before deletion");
    // console.log(json);
    const index = json.map(g => g.groupid).indexOf(groupID);

    let group = json.filter(g => {return g.groupid == groupID})[0];
    let groupSolves = group.solves.filter(s => s.solitaireid !== solitaireID);
    group.solves = groupSolves;

    // removeById(group.solves, solitaireID);

    json[index] = group;
    fs.writeFileSync(solutionDataPath, JSON.stringify(json, null, 2));
    // console.log("JSON object after deletion");
    // console.log(json);
    return json;
}

const removeById = (jsonArray, solitaireID) => {
    const index = jsonArray.findIndex(element => {
        return element.id === String(solitaireID);
    });
    if(index === -1){
        return false;
    };
    return !!jsonArray.splice(index, 1);
};

export { submitSolve, removeSolve, getGroupSolves, getAllSolves };
// module.exports = { submitSolve, removeSolve, getSolves };