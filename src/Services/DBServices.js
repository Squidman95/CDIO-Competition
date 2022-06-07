async function submitSolve(groupID, solitaireID) {
    var requestOptions = {
        method: 'PUT',
        redirect: 'follow'
    };
      
    let response = await fetch(`http://localhost:4000/solutions/${groupID}/${solitaireID}`, requestOptions)
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
      
    let response = await fetch(`http://localhost:4000/solutions/${groupID}/${solitaireID}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    return response;
}

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

export {submitSolve, removeSolve}