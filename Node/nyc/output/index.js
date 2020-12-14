function cov_13deh9wgok() {
  var path =
    "/Users/it00010356/Desktop/other_project/ProgramLearning/Node/nyc/src/index.js";
  var hash = "394ecd1244f0830872390f43e1744bc9eac10cb2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path:
      "/Users/it00010356/Desktop/other_project/ProgramLearning/Node/nyc/src/index.js",
    statementMap: {
      0: { start: { line: 2, column: 4 }, end: { line: 2, column: 21 } },
      1: { start: { line: 5, column: 0 }, end: { line: 8, column: 8 } },
      2: { start: { line: 6, column: 4 }, end: { line: 6, column: 8 } },
      3: { start: { line: 7, column: 4 }, end: { line: 7, column: 55 } },
      4: { start: { line: 10, column: 0 }, end: { line: 10, column: 21 } },
    },
    fnMap: {
      0: {
        name: "dj",
        decl: { start: { line: 1, column: 9 }, end: { line: 1, column: 11 } },
        loc: { start: { line: 1, column: 13 }, end: { line: 3, column: 1 } },
        line: 1,
      },
      1: {
        name: "(anonymous_1)",
        decl: { start: { line: 5, column: 12 }, end: { line: 5, column: 13 } },
        loc: { start: { line: 5, column: 16 }, end: { line: 8, column: 1 } },
        line: 5,
      },
    },
    branchMap: {},
    s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
    f: { 0: 0, 1: 0 },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "394ecd1244f0830872390f43e1744bc9eac10cb2",
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_13deh9wgok = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_13deh9wgok();
function dj() {
  cov_13deh9wgok().f[0]++;
  cov_13deh9wgok().s[0]++;
  console.log("dj");
}
cov_13deh9wgok().s[1]++;
setInterval(() => {
  cov_13deh9wgok().f[1]++;
  cov_13deh9wgok().s[2]++;
  dj();
  cov_13deh9wgok().s[3]++;
  console.log(JSON.stringify(global["__coverage__"]));
}, 5000);
cov_13deh9wgok().s[4]++;
module.exports = { dj };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRqIiwiY29uc29sZSIsImxvZyIsInNldEludGVydmFsIiwiSlNPTiIsInN0cmluZ2lmeSIsImdsb2JhbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJ5c0NBZVk7MkZBZlosUUFBU0EsQ0FBQUEsRUFBVCxFQUFhLGlEQUNUQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQ0gsQyx3QkFFREMsV0FBVyxDQUFDLElBQUksaURBQ1pILEVBQUUsR0FEVSx3QkFFWkMsT0FBTyxDQUFDQyxHQUFSLENBQVlFLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFNLENBQUMsY0FBRCxDQUFyQixDQUFaLEVBQ0gsQ0FIVSxDQUdSLElBSFEsQ0FBWCxDLHdCQUtBQyxNQUFNLENBQUNDLE9BQVAsQ0FBaUIsQ0FBQ1IsRUFBRCxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRqKCl7XG4gICAgY29uc29sZS5sb2coJ2RqJylcbn1cblxuc2V0SW50ZXJ2YWwoKCk9PntcbiAgICBkaigpXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZ2xvYmFsWydfX2NvdmVyYWdlX18nXSkpXG59LCA1MDAwKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtkan0iXX0=
