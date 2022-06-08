async function getSolutions(groupID, solitaireID) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      
    let response = await fetch(`http://localhost:5000/solutions/${groupID}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    return response;
}

async function submitSolve(groupID, solitaireID) {
    var requestOptions = {
        method: 'PUT',
        redirect: 'follow'
    };
      
    let response = await fetch(`http://localhost:5000/solutions/${groupID}/${solitaireID}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    return response;
}

async function removeSolve(groupID, solitaireID) {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };
      
    let response = await fetch(`http://localhost:5000/solutions/${groupID}/${solitaireID}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    return response;
}

export {getSolutions, submitSolve, removeSolve}

// async function submitSolve(groupID, solitaireID) {
//     console.log(`Request to PUT solve ${solitaireID} for groupID: ${groupID}`);
//     let response = await fetch(`http://localhost:4000/solutions/${groupID}/${solitaireID}`, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: 'PUT',
//     });
//     return await response.json();
// }


// Backend functions:
// function submitSolveLocal(groupID, solitaireID){
//     console.log(`Trying to update solve ${solitaireID} for group ${groupID}`);
//     let solve = {
//         "solitaireid": solitaireID,
//         "solved": "true"
//     };
//     // getItemSimple(productId);
//     let json = JSON.parse(fs.readFileSync(solutionDataPath, {encoding:'utf8', flag:'r'}));
//     let group = json.filter(g => {return g.id == groupID})[0];
//     const index = json.map(g => g.groupid).indexOf(groupID);
//     group.solves.push(solve);
//     json[index] = solve;
//     fs.writeFileSync(solutionDataPath, JSON.stringify(json, null, 2));
//     return solve;
// }

// function removeSolveLocal(groupID, solitaireID){
//     console.log(`Trying to update solve ${solitaireID} for group ${groupID}`);
// }

// const removeById = (jsonArray, itemId) => {
//     const index = jsonArray.findIndex(element => {
//         return element.id === String(itemId);
//     });
//     if(index === -1){
//         return false;
//     };
//     return !!jsonArray.splice(index, 1);
// };
