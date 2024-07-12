#Problem Service

#how routing working 
-/api.v1.problems/ping 
  -because the route starts with api 
     /api     ->/v1     ->/problems     ->/ping
     apiRouter->v1Router->problemRouter->ProblemController->service layer