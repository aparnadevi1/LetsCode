const { StatusCodes } = require("http-status-codes");
const Notimplemented = require("../errors/notimplemented.error");

function addProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not emented",
  });
}
function getProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Impleme",
  });
}
function getProblems(req, res, next) {
  try {
    throw new Notimplemented("addProblem");
  } catch (error) {
    next(error);
  }
}
function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: " Implemented",
  });
}
function updateProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not ted",
  });
}
function pingProblemController(req, res) {
  return res.json({ message: "problem controller is up" });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
