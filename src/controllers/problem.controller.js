const { StatusCodes } = require("http-status-codes");
const Notimplemented = require("../errors/notimplemented.error");

function addProblem(req, res) {
  try {
    throw new Notimplemented("addProblem");
  } catch (error) {
    next(error);
  }
}
function getProblem(req, res) {
  try {
    throw new Notimplemented("getProblem");
  } catch (error) {
    next(error);
  }
}
function getProblems(req, res, next) {
  try {
    throw new Notimplemented("getProblems");
  } catch (error) {
    next(error);
  }
}
function deleteProblem(req, res) {
  try {
    throw new Notimplemented("deleteProblem");
  } catch (error) {
    next(error);
  }
}
function updateProblem(req, res) {
  try {
    throw new Notimplemented("updateProblem");
  } catch (error) {
    next(error);
  }
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
