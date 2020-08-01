const getNotes = (request, response) => {

    response.send({'message':'Response from models/notes.js/getNotes'});

}

module.exports = {
  getNotes,
}